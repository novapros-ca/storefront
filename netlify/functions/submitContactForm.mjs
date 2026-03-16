import fetch from "node-fetch";
import { ConfidentialClientApplication } from "@azure/msal-node";

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

const buildAnswers = (formData) => {
  return [
    {
      questionId: "rb7871305a39840da89c33aafa3559aef",
      answer: { text: formData.name ?? "" },
    },
    {
      questionId: "r1b47ca5da822485c81e4a7b1eb39e75c",
      answer: { text: formData.phone ?? "" },
    },
    {
      questionId: "r3b6f60b7fb814a3e8e86d9faf8494a2c",
      answer: { text: formData.email ?? "" },
    },
    {
      questionId: "rbc437bed1f1a462b82eab10155007246",
      answer: { text: formData.comments ?? "" },
    },
  ];
};

export const handler = async (event) => {
  try {
    if (!event.body) {
      return { statusCode: 400, body: JSON.stringify("Payload required") };
    }

    const formData = JSON.parse(event.body);

    const token = await getAccessToken();

    const body = {
      responder: {}, // optional
      answers: buildAnswers(formData),
    };

    const res = await fetch(`https://graph.microsoft.com/v1.0/forms/${process.env.FORM_ID}/responses`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      return {
        statusCode: res.status,
        body: JSON.stringify({ message: "Graph error", details: text }),
      };
    }

    return { statusCode: 200, body: JSON.stringify("Form submitted") };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
