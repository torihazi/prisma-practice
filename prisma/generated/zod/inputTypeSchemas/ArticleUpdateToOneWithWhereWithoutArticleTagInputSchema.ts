import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleWhereInputSchema } from './ArticleWhereInputSchema';
import { ArticleUpdateWithoutArticleTagInputSchema } from './ArticleUpdateWithoutArticleTagInputSchema';
import { ArticleUncheckedUpdateWithoutArticleTagInputSchema } from './ArticleUncheckedUpdateWithoutArticleTagInputSchema';

export const ArticleUpdateToOneWithWhereWithoutArticleTagInputSchema: z.ZodType<Prisma.ArticleUpdateToOneWithWhereWithoutArticleTagInput> = z.object({
  where: z.lazy(() => ArticleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ArticleUpdateWithoutArticleTagInputSchema),z.lazy(() => ArticleUncheckedUpdateWithoutArticleTagInputSchema) ]),
}).strict();

export default ArticleUpdateToOneWithWhereWithoutArticleTagInputSchema;
