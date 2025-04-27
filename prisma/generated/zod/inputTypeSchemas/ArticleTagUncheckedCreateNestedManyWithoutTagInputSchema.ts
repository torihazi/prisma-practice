import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleTagCreateWithoutTagInputSchema } from './ArticleTagCreateWithoutTagInputSchema';
import { ArticleTagUncheckedCreateWithoutTagInputSchema } from './ArticleTagUncheckedCreateWithoutTagInputSchema';
import { ArticleTagCreateOrConnectWithoutTagInputSchema } from './ArticleTagCreateOrConnectWithoutTagInputSchema';
import { ArticleTagCreateManyTagInputEnvelopeSchema } from './ArticleTagCreateManyTagInputEnvelopeSchema';
import { ArticleTagWhereUniqueInputSchema } from './ArticleTagWhereUniqueInputSchema';

export const ArticleTagUncheckedCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.ArticleTagUncheckedCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => ArticleTagCreateWithoutTagInputSchema),z.lazy(() => ArticleTagCreateWithoutTagInputSchema).array(),z.lazy(() => ArticleTagUncheckedCreateWithoutTagInputSchema),z.lazy(() => ArticleTagUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ArticleTagCreateOrConnectWithoutTagInputSchema),z.lazy(() => ArticleTagCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ArticleTagCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ArticleTagWhereUniqueInputSchema),z.lazy(() => ArticleTagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ArticleTagUncheckedCreateNestedManyWithoutTagInputSchema;
