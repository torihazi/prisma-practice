import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleCreateNestedOneWithoutArticleTagInputSchema } from './ArticleCreateNestedOneWithoutArticleTagInputSchema';
import { TagCreateNestedOneWithoutArticleTagInputSchema } from './TagCreateNestedOneWithoutArticleTagInputSchema';

export const ArticleTagCreateInputSchema: z.ZodType<Prisma.ArticleTagCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  article: z.lazy(() => ArticleCreateNestedOneWithoutArticleTagInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutArticleTagInputSchema)
}).strict();

export default ArticleTagCreateInputSchema;
