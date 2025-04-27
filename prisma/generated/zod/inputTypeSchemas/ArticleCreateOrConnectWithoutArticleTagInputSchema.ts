import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleWhereUniqueInputSchema } from './ArticleWhereUniqueInputSchema';
import { ArticleCreateWithoutArticleTagInputSchema } from './ArticleCreateWithoutArticleTagInputSchema';
import { ArticleUncheckedCreateWithoutArticleTagInputSchema } from './ArticleUncheckedCreateWithoutArticleTagInputSchema';

export const ArticleCreateOrConnectWithoutArticleTagInputSchema: z.ZodType<Prisma.ArticleCreateOrConnectWithoutArticleTagInput> = z.object({
  where: z.lazy(() => ArticleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ArticleCreateWithoutArticleTagInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutArticleTagInputSchema) ]),
}).strict();

export default ArticleCreateOrConnectWithoutArticleTagInputSchema;
