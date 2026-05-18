import { randomUUID } from "node:crypto"

import type { ContactPayload } from "@/lib/contact-schema"

const GRAPH_SCOPE = "https://graph.microsoft.com/.default"

type GraphConfig = {
  tenantId: string
  clientId: string
  clientSecret: string
  driveId: string
  itemId: string
  sheetName: string
  tableName: string
}

function getGraphConfig(): GraphConfig | null {
  const tenantId = process.env.GRAPH_TENANT_ID
  const clientId = process.env.GRAPH_CLIENT_ID
  const clientSecret = process.env.GRAPH_CLIENT_SECRET
  const driveId = process.env.EXCEL_DRIVE_ID
  const itemId = process.env.EXCEL_ITEM_ID
  const sheetName = process.env.EXCEL_SHEET_NAME
  const tableName = process.env.EXCEL_TABLE_NAME

  if (
    !tenantId ||
    !clientId ||
    !clientSecret ||
    !driveId ||
    !itemId ||
    !sheetName ||
    !tableName
  ) {
    return null
  }

  return {
    tenantId,
    clientId,
    clientSecret,
    driveId,
    itemId,
    sheetName,
    tableName,
  }
}

async function fetchAccessToken(config: GraphConfig): Promise<string> {
  const tokenResponse = await fetch(
    `https://login.microsoftonline.com/${config.tenantId}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: config.clientId,
        client_secret: config.clientSecret,
        scope: GRAPH_SCOPE,
      }),
      cache: "no-store",
    },
  )

  if (!tokenResponse.ok) {
    throw new Error("Impossible de recuperer un token Microsoft Graph.")
  }

  const tokenJson = (await tokenResponse.json()) as { access_token?: string }

  if (!tokenJson.access_token) {
    throw new Error("Le token Microsoft Graph est manquant.")
  }

  return tokenJson.access_token
}

function getFormattedDate() {
  const now = new Date()

  return now
    .toLocaleString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })
    .replace(",", "")
}

function escapeExcelIdentifier(value: string): string {
  return value.replace(/'/g, "''")
}

export async function forwardContactToExcel(payload: ContactPayload) {
  const config = getGraphConfig()

  if (!config) {
    return { ok: false as const, status: 503 }
  }

  const token = await fetchAccessToken(config)
  const phoneDigits = payload.phone.replace(/\D/g, "")
  const contextualMessage = [
    payload.needType ? `Type de besoin: ${payload.needType}` : "",
    payload.company ? `Entreprise: ${payload.company}` : "",
    payload.message,
  ]
    .filter(Boolean)
    .join("\n")

  const rowValues = [
    randomUUID(),
    getFormattedDate(),
    getFormattedDate(),
    payload.email,
    payload.name,
    payload.name,
    payload.email,
    phoneDigits,
    contextualMessage,
    "",
  ]

  const rowUrl = `https://graph.microsoft.com/v1.0/drives/${config.driveId}/items/${config.itemId}/workbook/worksheets('${escapeExcelIdentifier(config.sheetName)}')/tables('${escapeExcelIdentifier(config.tableName)}')/rows`

  const response = await fetch(rowUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      index: null,
      values: [rowValues],
    }),
    cache: "no-store",
  })

  if (!response.ok) {
    return { ok: false as const, status: 502 }
  }

  return { ok: true as const, status: 200 }
}