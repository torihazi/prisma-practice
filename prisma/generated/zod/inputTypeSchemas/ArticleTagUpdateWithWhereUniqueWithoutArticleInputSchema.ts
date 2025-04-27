import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleTagWhereUniqueInputSchema } from './ArticleTagWhereUniqueInputSchema';
import { ArticleTagUpdateWithoutArticleInputSchema } from './ArticleTagUpdateWithoutArticleInputSchema';
import { ArticleTagUncheckedUpdateWithoutArticleInputSchema } from './ArticleTagUncheckedUpdateWithoutArticleInputSchema';

export const ArticleTagUpdateWithWhereUniqueWithoutArticleInputSchema: z.ZodType<Prisma.ArticleTagUpdateWithWhereUniqueWithoutArticleInput> = z.object({
  where: z.lazy(() => ArticleTagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ArticleTagUpdateWithoutArticleInputSchema),z.lazy(() => ArticleTagUncheckedUpdateWithoutArticleInputSchema) ]),
}).strict();

export default ArticleTagUpdateWithWhereUniqueWithoutArticleInputSchema;
