import fetch from "node-fetch";
import { ConfidentialClientApplication } from "@azure/msal-node";
import { randomUUID } from "crypto";

function getFormattedDate() {
    const now = new Date();

    return now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    }).replace(',', '');
}

const msalConfig = {
    auth: {
        clientId: process.env.CLIENT_ID,
        authority: `https://login.microsoftonline.com/${process.env.TENANT_ID}`,
        clientSecret: process.env.CLIENT_SECRET,
    },
};

const cca = new ConfidentialClientApplication(msalConfig);

const getAccessToken = async () => {
    const resp = await cca.acquireTokenByClientCredential({
        scopes: ["https://graph.microsoft.com/.default"],
    });
    if (!resp || !resp.accessToken) throw new Error("Failed to acquire access token");
    return resp.accessToken;
};

export const handler = async (event) => {
    try {
        const formData = JSON.parse(event.body);
        const token = await getAccessToken();

        const url = `https://graph.microsoft.com/v1.0/drives/${process.env.EXCEL_DRIVE_ID}/items/${process.env.EXCEL_ITEM_ID}/workbook/worksheets('${process.env.EXCEL_SHEET_NAME}')/tables('${process.env.EXCEL_TABLE_NAME}')/rows`;
        const currentDate = getFormattedDate();

        const body = {
            index: null,
            values: [
                [
                    randomUUID(),
                    currentDate,
                    currentDate,
                    formData.email ?? "",
                    formData.name ?? "",
                    formData.name ?? "",
                    formData.email ?? "",
                    formData.phone ?? "",
                    formData.comments ?? ""
                ]
            ],
        };

        const res = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        const resultText = await res.text();

        if (!res.ok) {
            return { statusCode: res.status, body: resultText };
        }

        return { statusCode: 200, body: JSON.stringify({ message: "Success!" }) };
    } catch (err) {
        return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
    }
};