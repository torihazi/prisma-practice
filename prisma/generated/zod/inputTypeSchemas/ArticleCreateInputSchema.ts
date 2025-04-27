import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserCreateNestedOneWithoutArticlesInputSchema } from './UserCreateNestedOneWithoutArticlesInputSchema';
import { ArticleTagCreateNestedManyWithoutArticleInputSchema } from './ArticleTagCreateNestedManyWithoutArticleInputSchema';

export const ArticleCreateInputSchema: z.ZodType<Prisma.ArticleCreateInput> = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutArticlesInputSchema),
  articleTags: z.lazy(() => ArticleTagCreateNestedManyWithoutArticleInputSchema).optional()
}).strict();

export default ArticleCreateInputSchema;
