import { z } from "zod";

export const validateRequest = <Output, Input = Output>(
  data: unknown,
  schema: z.ZodSchema<Output, z.ZodTypeDef, Input>
):
  | {
      success: true;
      data: Output;
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
