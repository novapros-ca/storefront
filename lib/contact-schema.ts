import { z } from "zod"

export const contactPayloadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().max(160).optional().default(""),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().max(40).optional().default(""),
  needType: z.string().trim().min(2).max(80),
  message: z.string().trim().min(10).max(2000),
  website: z.string().trim().max(1).optional().default(""),
})

export type ContactPayload = z.infer<typeof contactPayloadSchema>
