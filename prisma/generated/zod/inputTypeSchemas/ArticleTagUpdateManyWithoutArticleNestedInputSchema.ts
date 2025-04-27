import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleTagCreateWithoutArticleInputSchema } from './ArticleTagCreateWithoutArticleInputSchema';
import { ArticleTagUncheckedCreateWithoutArticleInputSchema } from './ArticleTagUncheckedCreateWithoutArticleInputSchema';
import { ArticleTagCreateOrConnectWithoutArticleInputSchema } from './ArticleTagCreateOrConnectWithoutArticleInputSchema';
import { ArticleTagUpsertWithWhereUniqueWithoutArticleInputSchema } from './ArticleTagUpsertWithWhereUniqueWithoutArticleInputSchema';
import { ArticleTagCreateManyArticleInputEnvelopeSchema } from './ArticleTagCreateManyArticleInputEnvelopeSchema';
import { ArticleTagWhereUniqueInputSchema } from './ArticleTagWhereUniqueInputSchema';
import { ArticleTagUpdateWithWhereUniqueWithoutArticleInputSchema } from './ArticleTagUpdateWithWhereUniqueWithoutArticleInputSchema';
import { ArticleTagUpdateManyWithWhereWithoutArticleInputSchema } from './ArticleTagUpdateManyWithWhereWithoutArticleInputSchema';
import { ArticleTagScalarWhereInputSchema } from './ArticleTagScalarWhereInputSchema';

export const ArticleTagUpdateManyWithoutArticleNestedInputSchema: z.ZodType<Prisma.ArticleTagUpdateManyWithoutArticleNestedInput> = z.object({
  create: z.union([ z.lazy(() => ArticleTagCreateWithoutArticleInputSchema),z.lazy(() => ArticleTagCreateWithoutArticleInputSchema).array(),z.lazy(() => ArticleTagUncheckedCreateWithoutArticleInputSchema),z.lazy(() => ArticleTagUncheckedCreateWithoutArticleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ArticleTagCreateOrConnectWithoutArticleInputSchema),z.lazy(() => ArticleTagCreateOrConnectWithoutArticleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ArticleTagUpsertWithWhereUniqueWithoutArticleInputSchema),z.lazy(() => ArticleTagUpsertWithWhereUniqueWithoutArticleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ArticleTagCreateManyArticleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ArticleTagWhereUniqueInputSchema),z.lazy(() => ArticleTagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ArticleTagWhereUniqueInputSchema),z.lazy(() => ArticleTagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ArticleTagWhereUniqueInputSchema),z.lazy(() => ArticleTagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ArticleTagWhereUniqueInputSchema),z.lazy(() => ArticleTagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ArticleTagUpdateWithWhereUniqueWithoutArticleInputSchema),z.lazy(() => ArticleTagUpdateWithWhereUniqueWithoutArticleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ArticleTagUpdateManyWithWhereWithoutArticleInputSchema),z.lazy(() => ArticleTagUpdateManyWithWhereWithoutArticleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ArticleTagScalarWhereInputSchema),z.lazy(() => ArticleTagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ArticleTagUpdateManyWithoutArticleNestedInputSchema;
