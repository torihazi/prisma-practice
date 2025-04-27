import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleWhereInputSchema } from './ArticleWhereInputSchema';
import { ArticleUpdateWithoutArticleTagsInputSchema } from './ArticleUpdateWithoutArticleTagsInputSchema';
import { ArticleUncheckedUpdateWithoutArticleTagsInputSchema } from './ArticleUncheckedUpdateWithoutArticleTagsInputSchema';

export const ArticleUpdateToOneWithWhereWithoutArticleTagsInputSchema: z.ZodType<Prisma.ArticleUpdateToOneWithWhereWithoutArticleTagsInput> = z.object({
  where: z.lazy(() => ArticleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ArticleUpdateWithoutArticleTagsInputSchema),z.lazy(() => ArticleUncheckedUpdateWithoutArticleTagsInputSchema) ]),
}).strict();

export default ArticleUpdateToOneWithWhereWithoutArticleTagsInputSchema;
