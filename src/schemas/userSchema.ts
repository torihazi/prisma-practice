import { z } from "zod";

export const requestPasswordSchema = z
  .string()
  .min(8, { message: "password must be at least 8 characters" })
  .regex(/[a-zA-Z]/, { message: "password must contain at least one letter" })
  .regex(/\d/, { message: "password must contain at least one number" });

export const requestLoginSchema = z.object({
  email: z.string().email().min(1, { message: "email is required" }),
  password: z.string().min(1, { message: "password is required" }),
});
