import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleCreateWithoutArticleTagsInputSchema } from './ArticleCreateWithoutArticleTagsInputSchema';
import { ArticleUncheckedCreateWithoutArticleTagsInputSchema } from './ArticleUncheckedCreateWithoutArticleTagsInputSchema';
import { ArticleCreateOrConnectWithoutArticleTagsInputSchema } from './ArticleCreateOrConnectWithoutArticleTagsInputSchema';
import { ArticleWhereUniqueInputSchema } from './ArticleWhereUniqueInputSchema';

export const ArticleCreateNestedOneWithoutArticleTagsInputSchema: z.ZodType<Prisma.ArticleCreateNestedOneWithoutArticleTagsInput> = z.object({
  create: z.union([ z.lazy(() => ArticleCreateWithoutArticleTagsInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutArticleTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ArticleCreateOrConnectWithoutArticleTagsInputSchema).optional(),
  connect: z.lazy(() => ArticleWhereUniqueInputSchema).optional()
}).strict();

export default ArticleCreateNestedOneWithoutArticleTagsInputSchema;
