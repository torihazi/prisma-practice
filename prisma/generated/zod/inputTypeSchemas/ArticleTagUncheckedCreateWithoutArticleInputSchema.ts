import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';

export const ArticleTagUncheckedCreateWithoutArticleInputSchema: z.ZodType<Prisma.ArticleTagUncheckedCreateWithoutArticleInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tagId: z.number().int()
}).strict();

export default ArticleTagUncheckedCreateWithoutArticleInputSchema;
