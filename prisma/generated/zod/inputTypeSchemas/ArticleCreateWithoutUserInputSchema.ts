import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleTagCreateNestedManyWithoutArticleInputSchema } from './ArticleTagCreateNestedManyWithoutArticleInputSchema';

export const ArticleCreateWithoutUserInputSchema: z.ZodType<Prisma.ArticleCreateWithoutUserInput> = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ArticleTag: z.lazy(() => ArticleTagCreateNestedManyWithoutArticleInputSchema).optional()
}).strict();

export default ArticleCreateWithoutUserInputSchema;
