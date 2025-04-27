import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';
import { OrganizationCreateWithoutUserOrganizationsInputSchema } from './OrganizationCreateWithoutUserOrganizationsInputSchema';
import { OrganizationUncheckedCreateWithoutUserOrganizationsInputSchema } from './OrganizationUncheckedCreateWithoutUserOrganizationsInputSchema';

export const OrganizationCreateOrConnectWithoutUserOrganizationsInputSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutUserOrganizationsInput> = z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutUserOrganizationsInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutUserOrganizationsInputSchema) ]),
}).strict();

export default OrganizationCreateOrConnectWithoutUserOrganizationsInputSchema;
