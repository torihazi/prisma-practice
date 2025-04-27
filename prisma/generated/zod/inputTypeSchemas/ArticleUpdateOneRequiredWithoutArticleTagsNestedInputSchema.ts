import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleCreateWithoutArticleTagsInputSchema } from './ArticleCreateWithoutArticleTagsInputSchema';
import { ArticleUncheckedCreateWithoutArticleTagsInputSchema } from './ArticleUncheckedCreateWithoutArticleTagsInputSchema';
import { ArticleCreateOrConnectWithoutArticleTagsInputSchema } from './ArticleCreateOrConnectWithoutArticleTagsInputSchema';
import { ArticleUpsertWithoutArticleTagsInputSchema } from './ArticleUpsertWithoutArticleTagsInputSchema';
import { ArticleWhereUniqueInputSchema } from './ArticleWhereUniqueInputSchema';
import { ArticleUpdateToOneWithWhereWithoutArticleTagsInputSchema } from './ArticleUpdateToOneWithWhereWithoutArticleTagsInputSchema';
import { ArticleUpdateWithoutArticleTagsInputSchema } from './ArticleUpdateWithoutArticleTagsInputSchema';
import { ArticleUncheckedUpdateWithoutArticleTagsInputSchema } from './ArticleUncheckedUpdateWithoutArticleTagsInputSchema';

export const ArticleUpdateOneRequiredWithoutArticleTagsNestedInputSchema: z.ZodType<Prisma.ArticleUpdateOneRequiredWithoutArticleTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ArticleCreateWithoutArticleTagsInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutArticleTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ArticleCreateOrConnectWithoutArticleTagsInputSchema).optional(),
  upsert: z.lazy(() => ArticleUpsertWithoutArticleTagsInputSchema).optional(),
  connect: z.lazy(() => ArticleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ArticleUpdateToOneWithWhereWithoutArticleTagsInputSchema),z.lazy(() => ArticleUpdateWithoutArticleTagsInputSchema),z.lazy(() => ArticleUncheckedUpdateWithoutArticleTagsInputSchema) ]).optional(),
}).strict();

export default ArticleUpdateOneRequiredWithoutArticleTagsNestedInputSchema;
