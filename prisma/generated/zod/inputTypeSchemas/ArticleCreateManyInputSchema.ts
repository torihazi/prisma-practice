import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';

export const ArticleCreateManyInputSchema: z.ZodType<Prisma.ArticleCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string().min(1).max(100),
  content: z.string().min(1),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.number().int(),
  organizationId: z.number().int().optional().nullable()
}).strict();

export default ArticleCreateManyInputSchema;
