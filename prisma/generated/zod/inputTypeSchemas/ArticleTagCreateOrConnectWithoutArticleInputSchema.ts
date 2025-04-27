import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleTagWhereUniqueInputSchema } from './ArticleTagWhereUniqueInputSchema';
import { ArticleTagCreateWithoutArticleInputSchema } from './ArticleTagCreateWithoutArticleInputSchema';
import { ArticleTagUncheckedCreateWithoutArticleInputSchema } from './ArticleTagUncheckedCreateWithoutArticleInputSchema';

export const ArticleTagCreateOrConnectWithoutArticleInputSchema: z.ZodType<Prisma.ArticleTagCreateOrConnectWithoutArticleInput> = z.object({
  where: z.lazy(() => ArticleTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ArticleTagCreateWithoutArticleInputSchema),z.lazy(() => ArticleTagUncheckedCreateWithoutArticleInputSchema) ]),
}).strict();

export default ArticleTagCreateOrConnectWithoutArticleInputSchema;
