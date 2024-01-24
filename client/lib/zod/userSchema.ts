import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  doc: z.string().min(8),
  name: z.string().min(3),
  phone: z.string(),
  direccion: z.string(),
});
