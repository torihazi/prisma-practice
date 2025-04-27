import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { OrganizationCreateWithoutArticlesInputSchema } from './OrganizationCreateWithoutArticlesInputSchema';
import { OrganizationUncheckedCreateWithoutArticlesInputSchema } from './OrganizationUncheckedCreateWithoutArticlesInputSchema';
import { OrganizationCreateOrConnectWithoutArticlesInputSchema } from './OrganizationCreateOrConnectWithoutArticlesInputSchema';
import { OrganizationUpsertWithoutArticlesInputSchema } from './OrganizationUpsertWithoutArticlesInputSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';
import { OrganizationUpdateToOneWithWhereWithoutArticlesInputSchema } from './OrganizationUpdateToOneWithWhereWithoutArticlesInputSchema';
import { OrganizationUpdateWithoutArticlesInputSchema } from './OrganizationUpdateWithoutArticlesInputSchema';
import { OrganizationUncheckedUpdateWithoutArticlesInputSchema } from './OrganizationUncheckedUpdateWithoutArticlesInputSchema';

export const OrganizationUpdateOneWithoutArticlesNestedInputSchema: z.ZodType<Prisma.OrganizationUpdateOneWithoutArticlesNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutArticlesInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutArticlesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutArticlesInputSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutArticlesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganizationUpdateToOneWithWhereWithoutArticlesInputSchema),z.lazy(() => OrganizationUpdateWithoutArticlesInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutArticlesInputSchema) ]).optional(),
}).strict();

export default OrganizationUpdateOneWithoutArticlesNestedInputSchema;
