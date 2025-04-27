import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleCreateWithoutArticleTagInputSchema } from './ArticleCreateWithoutArticleTagInputSchema';
import { ArticleUncheckedCreateWithoutArticleTagInputSchema } from './ArticleUncheckedCreateWithoutArticleTagInputSchema';
import { ArticleCreateOrConnectWithoutArticleTagInputSchema } from './ArticleCreateOrConnectWithoutArticleTagInputSchema';
import { ArticleUpsertWithoutArticleTagInputSchema } from './ArticleUpsertWithoutArticleTagInputSchema';
import { ArticleWhereUniqueInputSchema } from './ArticleWhereUniqueInputSchema';
import { ArticleUpdateToOneWithWhereWithoutArticleTagInputSchema } from './ArticleUpdateToOneWithWhereWithoutArticleTagInputSchema';
import { ArticleUpdateWithoutArticleTagInputSchema } from './ArticleUpdateWithoutArticleTagInputSchema';
import { ArticleUncheckedUpdateWithoutArticleTagInputSchema } from './ArticleUncheckedUpdateWithoutArticleTagInputSchema';

export const ArticleUpdateOneRequiredWithoutArticleTagNestedInputSchema: z.ZodType<Prisma.ArticleUpdateOneRequiredWithoutArticleTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => ArticleCreateWithoutArticleTagInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutArticleTagInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ArticleCreateOrConnectWithoutArticleTagInputSchema).optional(),
  upsert: z.lazy(() => ArticleUpsertWithoutArticleTagInputSchema).optional(),
  connect: z.lazy(() => ArticleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ArticleUpdateToOneWithWhereWithoutArticleTagInputSchema),z.lazy(() => ArticleUpdateWithoutArticleTagInputSchema),z.lazy(() => ArticleUncheckedUpdateWithoutArticleTagInputSchema) ]).optional(),
}).strict();

export default ArticleUpdateOneRequiredWithoutArticleTagNestedInputSchema;
