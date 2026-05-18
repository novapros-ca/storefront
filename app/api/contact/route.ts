import { NextResponse } from "next/server"

import { forwardContactToExcel } from "@/lib/contact-excel"
import { contactPayloadSchema } from "@/lib/contact-schema"

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const parsed = contactPayloadSchema.safeParse(json)

    if (!parsed.success) {
      const firstError = parsed.error.errors[0]?.message ?? "Données de formulaire invalides."
      return NextResponse.json(
        { message: firstError },
        { status: 400 },
      )
    }

    const payload = parsed.data

    // Honeypot field. Bots fill this; humans leave it empty.
    if (payload.website) {
      return NextResponse.json({ message: "Message recu." }, { status: 200 })
    }

    const forwarded = await forwardContactToExcel(payload)

    if (!forwarded.ok) {
      if (forwarded.status === 503) {
        return NextResponse.json(
          { message: "Service de contact non configure sur ce serveur." },
          { status: 503 },
        )
      }

      return NextResponse.json(
        { message: "Transmission du message impossible pour le moment." },
        { status: 502 },
      )
    }

    return NextResponse.json({ message: "Message envoye." }, { status: 200 })
  } catch {
    return NextResponse.json(
      { message: "Erreur serveur lors de l'envoi." },
      { status: 500 },
    )
  }
}
