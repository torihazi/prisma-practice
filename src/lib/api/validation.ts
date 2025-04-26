import { z } from "zod";

export const validateRequest = <T>(
  data: unknown,
  schema: z.ZodSchema<T>
):
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: Response;
    } => {
  const bodyValidation = schema.safeParse(data);
  if (!bodyValidation.success) {
    return {
      success: false,
      error: Response.json(
        {
          error: bodyValidation.error.errors
            .map((error) => error.message)
            .join(","),
        },
        {
          status: 400,
        }
      ),
    };
  }
  return { success: true, data: bodyValidation.data };
};
