import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleWhereUniqueInputSchema } from './ArticleWhereUniqueInputSchema';
import { ArticleCreateWithoutArticleTagsInputSchema } from './ArticleCreateWithoutArticleTagsInputSchema';
import { ArticleUncheckedCreateWithoutArticleTagsInputSchema } from './ArticleUncheckedCreateWithoutArticleTagsInputSchema';

export const ArticleCreateOrConnectWithoutArticleTagsInputSchema: z.ZodType<Prisma.ArticleCreateOrConnectWithoutArticleTagsInput> = z.object({
  where: z.lazy(() => ArticleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ArticleCreateWithoutArticleTagsInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutArticleTagsInputSchema) ]),
}).strict();

export default ArticleCreateOrConnectWithoutArticleTagsInputSchema;
