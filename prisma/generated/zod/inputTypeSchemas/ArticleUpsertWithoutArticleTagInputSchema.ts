import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleUpdateWithoutArticleTagInputSchema } from './ArticleUpdateWithoutArticleTagInputSchema';
import { ArticleUncheckedUpdateWithoutArticleTagInputSchema } from './ArticleUncheckedUpdateWithoutArticleTagInputSchema';
import { ArticleCreateWithoutArticleTagInputSchema } from './ArticleCreateWithoutArticleTagInputSchema';
import { ArticleUncheckedCreateWithoutArticleTagInputSchema } from './ArticleUncheckedCreateWithoutArticleTagInputSchema';
import { ArticleWhereInputSchema } from './ArticleWhereInputSchema';

export const ArticleUpsertWithoutArticleTagInputSchema: z.ZodType<Prisma.ArticleUpsertWithoutArticleTagInput> = z.object({
  update: z.union([ z.lazy(() => ArticleUpdateWithoutArticleTagInputSchema),z.lazy(() => ArticleUncheckedUpdateWithoutArticleTagInputSchema) ]),
  create: z.union([ z.lazy(() => ArticleCreateWithoutArticleTagInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutArticleTagInputSchema) ]),
  where: z.lazy(() => ArticleWhereInputSchema).optional()
}).strict();

export default ArticleUpsertWithoutArticleTagInputSchema;
