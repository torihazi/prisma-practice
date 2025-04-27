import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleCreateNestedOneWithoutArticleTagsInputSchema } from './ArticleCreateNestedOneWithoutArticleTagsInputSchema';

export const ArticleTagCreateWithoutTagInputSchema: z.ZodType<Prisma.ArticleTagCreateWithoutTagInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  article: z.lazy(() => ArticleCreateNestedOneWithoutArticleTagsInputSchema)
}).strict();

export default ArticleTagCreateWithoutTagInputSchema;
