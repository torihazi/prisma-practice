import { z } from "zod";

export const paginationQuerySchema = z.object({
  take: z
    .string()
    .optional()
    .transform((val) => (val === undefined ? val : parseInt(val)))
    .refine((val) => val === undefined || !isNaN(val), {
      message: "takeの形式が異なります",
    }),
  skip: z
    .string()
    .optional()
    .transform((val) => (val === undefined ? val : parseInt(val)))
    .refine((val) => val === undefined || !isNaN(val), {
      message: "skipの形式が異なります",
    }),
});

export const pathIdSchema = z.object({
  id: z
    .string()
    .transform((val) => parseInt(val))
    .refine((val) => !isNaN(val), {
      message: "idの形式が異なります",
    }),
});
