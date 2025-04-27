import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleTagWhereUniqueInputSchema } from './ArticleTagWhereUniqueInputSchema';
import { ArticleTagUpdateWithoutArticleInputSchema } from './ArticleTagUpdateWithoutArticleInputSchema';
import { ArticleTagUncheckedUpdateWithoutArticleInputSchema } from './ArticleTagUncheckedUpdateWithoutArticleInputSchema';
import { ArticleTagCreateWithoutArticleInputSchema } from './ArticleTagCreateWithoutArticleInputSchema';
import { ArticleTagUncheckedCreateWithoutArticleInputSchema } from './ArticleTagUncheckedCreateWithoutArticleInputSchema';

export const ArticleTagUpsertWithWhereUniqueWithoutArticleInputSchema: z.ZodType<Prisma.ArticleTagUpsertWithWhereUniqueWithoutArticleInput> = z.object({
  where: z.lazy(() => ArticleTagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ArticleTagUpdateWithoutArticleInputSchema),z.lazy(() => ArticleTagUncheckedUpdateWithoutArticleInputSchema) ]),
  create: z.union([ z.lazy(() => ArticleTagCreateWithoutArticleInputSchema),z.lazy(() => ArticleTagUncheckedCreateWithoutArticleInputSchema) ]),
}).strict();

export default ArticleTagUpsertWithWhereUniqueWithoutArticleInputSchema;
