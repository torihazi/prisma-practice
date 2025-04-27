import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleTagCreateWithoutArticleInputSchema } from './ArticleTagCreateWithoutArticleInputSchema';
import { ArticleTagUncheckedCreateWithoutArticleInputSchema } from './ArticleTagUncheckedCreateWithoutArticleInputSchema';
import { ArticleTagCreateOrConnectWithoutArticleInputSchema } from './ArticleTagCreateOrConnectWithoutArticleInputSchema';
import { ArticleTagCreateManyArticleInputEnvelopeSchema } from './ArticleTagCreateManyArticleInputEnvelopeSchema';
import { ArticleTagWhereUniqueInputSchema } from './ArticleTagWhereUniqueInputSchema';

export const ArticleTagUncheckedCreateNestedManyWithoutArticleInputSchema: z.ZodType<Prisma.ArticleTagUncheckedCreateNestedManyWithoutArticleInput> = z.object({
  create: z.union([ z.lazy(() => ArticleTagCreateWithoutArticleInputSchema),z.lazy(() => ArticleTagCreateWithoutArticleInputSchema).array(),z.lazy(() => ArticleTagUncheckedCreateWithoutArticleInputSchema),z.lazy(() => ArticleTagUncheckedCreateWithoutArticleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ArticleTagCreateOrConnectWithoutArticleInputSchema),z.lazy(() => ArticleTagCreateOrConnectWithoutArticleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ArticleTagCreateManyArticleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ArticleTagWhereUniqueInputSchema),z.lazy(() => ArticleTagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ArticleTagUncheckedCreateNestedManyWithoutArticleInputSchema;
