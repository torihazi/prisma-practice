import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleCreateNestedOneWithoutArticleTagsInputSchema } from './ArticleCreateNestedOneWithoutArticleTagsInputSchema';
import { TagCreateNestedOneWithoutArticleTagsInputSchema } from './TagCreateNestedOneWithoutArticleTagsInputSchema';

export const ArticleTagCreateInputSchema: z.ZodType<Prisma.ArticleTagCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  article: z.lazy(() => ArticleCreateNestedOneWithoutArticleTagsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutArticleTagsInputSchema)
}).strict();

export default ArticleTagCreateInputSchema;
