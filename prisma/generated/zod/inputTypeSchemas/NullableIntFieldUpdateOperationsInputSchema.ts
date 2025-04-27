import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export default NullableIntFieldUpdateOperationsInputSchema;
