import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleCreateWithoutOrganizationInputSchema } from './ArticleCreateWithoutOrganizationInputSchema';
import { ArticleUncheckedCreateWithoutOrganizationInputSchema } from './ArticleUncheckedCreateWithoutOrganizationInputSchema';
import { ArticleCreateOrConnectWithoutOrganizationInputSchema } from './ArticleCreateOrConnectWithoutOrganizationInputSchema';
import { ArticleUpsertWithWhereUniqueWithoutOrganizationInputSchema } from './ArticleUpsertWithWhereUniqueWithoutOrganizationInputSchema';
import { ArticleCreateManyOrganizationInputEnvelopeSchema } from './ArticleCreateManyOrganizationInputEnvelopeSchema';
import { ArticleWhereUniqueInputSchema } from './ArticleWhereUniqueInputSchema';
import { ArticleUpdateWithWhereUniqueWithoutOrganizationInputSchema } from './ArticleUpdateWithWhereUniqueWithoutOrganizationInputSchema';
import { ArticleUpdateManyWithWhereWithoutOrganizationInputSchema } from './ArticleUpdateManyWithWhereWithoutOrganizationInputSchema';
import { ArticleScalarWhereInputSchema } from './ArticleScalarWhereInputSchema';

export const ArticleUpdateManyWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.ArticleUpdateManyWithoutOrganizationNestedInput> = z.object({
  create: z.union([ z.lazy(() => ArticleCreateWithoutOrganizationInputSchema),z.lazy(() => ArticleCreateWithoutOrganizationInputSchema).array(),z.lazy(() => ArticleUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ArticleCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => ArticleCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ArticleUpsertWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => ArticleUpsertWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ArticleCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ArticleUpdateWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => ArticleUpdateWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ArticleUpdateManyWithWhereWithoutOrganizationInputSchema),z.lazy(() => ArticleUpdateManyWithWhereWithoutOrganizationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ArticleScalarWhereInputSchema),z.lazy(() => ArticleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ArticleUpdateManyWithoutOrganizationNestedInputSchema;
