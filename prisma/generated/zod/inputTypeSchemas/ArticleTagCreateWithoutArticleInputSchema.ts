import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { TagCreateNestedOneWithoutArticleTagInputSchema } from './TagCreateNestedOneWithoutArticleTagInputSchema';

export const ArticleTagCreateWithoutArticleInputSchema: z.ZodType<Prisma.ArticleTagCreateWithoutArticleInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tag: z.lazy(() => TagCreateNestedOneWithoutArticleTagInputSchema)
}).strict();

export default ArticleTagCreateWithoutArticleInputSchema;
