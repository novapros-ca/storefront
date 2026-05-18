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

type GraphConfigResult =
  | { ok: true; config: GraphConfig }
  | { ok: false; missing: string[] }

function getGraphConfig(): GraphConfigResult {
  const envMap = {
    GRAPH_TENANT_ID: process.env.GRAPH_TENANT_ID,
    GRAPH_CLIENT_ID: process.env.GRAPH_CLIENT_ID,
    GRAPH_CLIENT_SECRET: process.env.GRAPH_CLIENT_SECRET,
    EXCEL_DRIVE_ID: process.env.EXCEL_DRIVE_ID,
    EXCEL_ITEM_ID: process.env.EXCEL_ITEM_ID,
    EXCEL_SHEET_NAME: process.env.EXCEL_SHEET_NAME,
    EXCEL_TABLE_NAME: process.env.EXCEL_TABLE_NAME,
  }

  const missing = Object.entries(envMap)
    .filter(([, value]) => !value)
    .map(([name]) => name)

  if (missing.length > 0) {
    return { ok: false, missing }
  }

  return {
    ok: true,
    config: {
      tenantId: envMap.GRAPH_TENANT_ID!,
      clientId: envMap.GRAPH_CLIENT_ID!,
      clientSecret: envMap.GRAPH_CLIENT_SECRET!,
      driveId: envMap.EXCEL_DRIVE_ID!,
      itemId: envMap.EXCEL_ITEM_ID!,
      sheetName: envMap.EXCEL_SHEET_NAME!,
      tableName: envMap.EXCEL_TABLE_NAME!,
    },
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
  const configResult = getGraphConfig()

  if (!configResult.ok) {
    return { ok: false as const, status: 503, missing: configResult.missing }
  }

  const { config } = configResult
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
    return { ok: false as const, status: 502, missing: [] }
  }

  return { ok: true as const, status: 200, missing: [] }
}