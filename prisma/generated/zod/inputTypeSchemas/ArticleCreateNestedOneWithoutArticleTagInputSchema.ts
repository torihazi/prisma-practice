import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleCreateWithoutArticleTagInputSchema } from './ArticleCreateWithoutArticleTagInputSchema';
import { ArticleUncheckedCreateWithoutArticleTagInputSchema } from './ArticleUncheckedCreateWithoutArticleTagInputSchema';
import { ArticleCreateOrConnectWithoutArticleTagInputSchema } from './ArticleCreateOrConnectWithoutArticleTagInputSchema';
import { ArticleWhereUniqueInputSchema } from './ArticleWhereUniqueInputSchema';

export const ArticleCreateNestedOneWithoutArticleTagInputSchema: z.ZodType<Prisma.ArticleCreateNestedOneWithoutArticleTagInput> = z.object({
  create: z.union([ z.lazy(() => ArticleCreateWithoutArticleTagInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutArticleTagInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ArticleCreateOrConnectWithoutArticleTagInputSchema).optional(),
  connect: z.lazy(() => ArticleWhereUniqueInputSchema).optional()
}).strict();

export default ArticleCreateNestedOneWithoutArticleTagInputSchema;
