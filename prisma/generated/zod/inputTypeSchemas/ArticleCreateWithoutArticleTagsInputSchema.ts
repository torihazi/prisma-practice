import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserCreateNestedOneWithoutArticlesInputSchema } from './UserCreateNestedOneWithoutArticlesInputSchema';
import { OrganizationCreateNestedOneWithoutArticlesInputSchema } from './OrganizationCreateNestedOneWithoutArticlesInputSchema';

export const ArticleCreateWithoutArticleTagsInputSchema: z.ZodType<Prisma.ArticleCreateWithoutArticleTagsInput> = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutArticlesInputSchema),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutArticlesInputSchema).optional()
}).strict();

export default ArticleCreateWithoutArticleTagsInputSchema;
