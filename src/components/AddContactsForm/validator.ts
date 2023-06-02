import { z } from "zod";

export const schema = z.object({
  name: z.string(),
  email: z.string().email("Deve ser um email"),
  phone: z.string(),
  userId: z.string(),
});

export const formSchema = z.object({
  name: z.string(),
  email: z.string().email("Deve ser um email"),
  phone: z.string(),
});

export const responseSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email("Deve ser um email"),
  phone: z.string(),
  userId: z.string(),
});

export type ContactData = z.infer<typeof schema>;
export type ContactFormData = z.infer<typeof formSchema>;
export type ContactResponseData = z.infer<typeof responseSchema>;
