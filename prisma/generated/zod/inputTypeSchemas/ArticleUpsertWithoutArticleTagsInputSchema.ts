import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleUpdateWithoutArticleTagsInputSchema } from './ArticleUpdateWithoutArticleTagsInputSchema';
import { ArticleUncheckedUpdateWithoutArticleTagsInputSchema } from './ArticleUncheckedUpdateWithoutArticleTagsInputSchema';
import { ArticleCreateWithoutArticleTagsInputSchema } from './ArticleCreateWithoutArticleTagsInputSchema';
import { ArticleUncheckedCreateWithoutArticleTagsInputSchema } from './ArticleUncheckedCreateWithoutArticleTagsInputSchema';
import { ArticleWhereInputSchema } from './ArticleWhereInputSchema';

export const ArticleUpsertWithoutArticleTagsInputSchema: z.ZodType<Prisma.ArticleUpsertWithoutArticleTagsInput> = z.object({
  update: z.union([ z.lazy(() => ArticleUpdateWithoutArticleTagsInputSchema),z.lazy(() => ArticleUncheckedUpdateWithoutArticleTagsInputSchema) ]),
  create: z.union([ z.lazy(() => ArticleCreateWithoutArticleTagsInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutArticleTagsInputSchema) ]),
  where: z.lazy(() => ArticleWhereInputSchema).optional()
}).strict();

export default ArticleUpsertWithoutArticleTagsInputSchema;
