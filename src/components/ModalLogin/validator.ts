import { z } from "zod";

export const schema = z.object({
  email: z.string().email("Deve ser um email"),
  password: z.string().min(8, "Deve conter pelo menos 8 caracteres"),
});

export type LoginData = z.infer<typeof schema>;
