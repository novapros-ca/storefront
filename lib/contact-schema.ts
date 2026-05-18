import { z } from "zod"

export const contactPayloadSchema = z.object({
  name: z.string().trim().min(2, { message: "Le nom doit contenir au moins 2 caractères." }).max(120),
  company: z.string().trim().max(160).optional().default(""),
  email: z.string().trim().email({ message: "L'adresse courriel est invalide." }).max(160),
  phone: z.string().trim().max(40).optional().default(""),
  needType: z.string().trim().min(2, { message: "Veuillez sélectionner un type de besoin." }).max(80),
  message: z.string().trim().min(10, { message: "Le message doit contenir au moins 10 caractères." }).max(2000),
  website: z.string().trim().max(1).optional().default(""),
})

export type ContactPayload = z.infer<typeof contactPayloadSchema>
