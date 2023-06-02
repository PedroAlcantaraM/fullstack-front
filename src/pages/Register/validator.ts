import { z } from "zod";

export const schema = z.object({
  name: z.string(),
  email: z.string().email("Deve ser um email"),
  password: z.string().min(8, "Deve conter pelo menos 8 caracteres"),
  phone: z.string(),
});

export type RegisterData = z.infer<typeof schema>;
