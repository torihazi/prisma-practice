import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';
import { OrganizationCreateWithoutArticlesInputSchema } from './OrganizationCreateWithoutArticlesInputSchema';
import { OrganizationUncheckedCreateWithoutArticlesInputSchema } from './OrganizationUncheckedCreateWithoutArticlesInputSchema';

export const OrganizationCreateOrConnectWithoutArticlesInputSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutArticlesInput> = z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutArticlesInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutArticlesInputSchema) ]),
}).strict();

export default OrganizationCreateOrConnectWithoutArticlesInputSchema;
