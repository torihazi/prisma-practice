import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleTagUncheckedCreateNestedManyWithoutArticleInputSchema } from './ArticleTagUncheckedCreateNestedManyWithoutArticleInputSchema';

export const ArticleUncheckedCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.ArticleUncheckedCreateWithoutOrganizationInput> = z.object({
  id: z.number().int().optional(),
  title: z.string().min(1).max(100),
  content: z.string().min(1),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.number().int(),
  articleTags: z.lazy(() => ArticleTagUncheckedCreateNestedManyWithoutArticleInputSchema).optional()
}).strict();

export default ArticleUncheckedCreateWithoutOrganizationInputSchema;
