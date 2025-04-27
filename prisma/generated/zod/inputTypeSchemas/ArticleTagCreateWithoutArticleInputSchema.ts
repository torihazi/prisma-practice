import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { TagCreateNestedOneWithoutArticleTagsInputSchema } from './TagCreateNestedOneWithoutArticleTagsInputSchema';

export const ArticleTagCreateWithoutArticleInputSchema: z.ZodType<Prisma.ArticleTagCreateWithoutArticleInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tag: z.lazy(() => TagCreateNestedOneWithoutArticleTagsInputSchema)
}).strict();

export default ArticleTagCreateWithoutArticleInputSchema;
