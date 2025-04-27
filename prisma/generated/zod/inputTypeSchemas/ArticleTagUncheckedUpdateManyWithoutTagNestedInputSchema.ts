import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleTagCreateWithoutTagInputSchema } from './ArticleTagCreateWithoutTagInputSchema';
import { ArticleTagUncheckedCreateWithoutTagInputSchema } from './ArticleTagUncheckedCreateWithoutTagInputSchema';
import { ArticleTagCreateOrConnectWithoutTagInputSchema } from './ArticleTagCreateOrConnectWithoutTagInputSchema';
import { ArticleTagUpsertWithWhereUniqueWithoutTagInputSchema } from './ArticleTagUpsertWithWhereUniqueWithoutTagInputSchema';
import { ArticleTagCreateManyTagInputEnvelopeSchema } from './ArticleTagCreateManyTagInputEnvelopeSchema';
import { ArticleTagWhereUniqueInputSchema } from './ArticleTagWhereUniqueInputSchema';
import { ArticleTagUpdateWithWhereUniqueWithoutTagInputSchema } from './ArticleTagUpdateWithWhereUniqueWithoutTagInputSchema';
import { ArticleTagUpdateManyWithWhereWithoutTagInputSchema } from './ArticleTagUpdateManyWithWhereWithoutTagInputSchema';
import { ArticleTagScalarWhereInputSchema } from './ArticleTagScalarWhereInputSchema';

export const ArticleTagUncheckedUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.ArticleTagUncheckedUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => ArticleTagCreateWithoutTagInputSchema),z.lazy(() => ArticleTagCreateWithoutTagInputSchema).array(),z.lazy(() => ArticleTagUncheckedCreateWithoutTagInputSchema),z.lazy(() => ArticleTagUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ArticleTagCreateOrConnectWithoutTagInputSchema),z.lazy(() => ArticleTagCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ArticleTagUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => ArticleTagUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ArticleTagCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ArticleTagWhereUniqueInputSchema),z.lazy(() => ArticleTagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ArticleTagWhereUniqueInputSchema),z.lazy(() => ArticleTagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ArticleTagWhereUniqueInputSchema),z.lazy(() => ArticleTagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ArticleTagWhereUniqueInputSchema),z.lazy(() => ArticleTagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ArticleTagUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => ArticleTagUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ArticleTagUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => ArticleTagUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ArticleTagScalarWhereInputSchema),z.lazy(() => ArticleTagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ArticleTagUncheckedUpdateManyWithoutTagNestedInputSchema;
