import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';

export const ArticleTagUncheckedCreateInputSchema: z.ZodType<Prisma.ArticleTagUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  articleId: z.number().int(),
  tagId: z.number().int()
}).strict();

export default ArticleTagUncheckedCreateInputSchema;
