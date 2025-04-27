import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';

export const OrganizationCreateManyInputSchema: z.ZodType<Prisma.OrganizationCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string().min(1).max(30)
}).strict();

export default OrganizationCreateManyInputSchema;
