import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { OrganizationCreateWithoutArticlesInputSchema } from './OrganizationCreateWithoutArticlesInputSchema';
import { OrganizationUncheckedCreateWithoutArticlesInputSchema } from './OrganizationUncheckedCreateWithoutArticlesInputSchema';
import { OrganizationCreateOrConnectWithoutArticlesInputSchema } from './OrganizationCreateOrConnectWithoutArticlesInputSchema';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';

export const OrganizationCreateNestedOneWithoutArticlesInputSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutArticlesInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutArticlesInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutArticlesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutArticlesInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional()
}).strict();

export default OrganizationCreateNestedOneWithoutArticlesInputSchema;
