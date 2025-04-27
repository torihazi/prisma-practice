import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';

export const ArticleTagUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.ArticleTagUncheckedCreateWithoutTagInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  articleId: z.number().int()
}).strict();

export default ArticleTagUncheckedCreateWithoutTagInputSchema;
