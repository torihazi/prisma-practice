import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { OrganizationCreateWithoutUserOrganizationsInputSchema } from './OrganizationCreateWithoutUserOrganizationsInputSchema';
import { OrganizationUncheckedCreateWithoutUserOrganizationsInputSchema } from './OrganizationUncheckedCreateWithoutUserOrganizationsInputSchema';
import { OrganizationCreateOrConnectWithoutUserOrganizationsInputSchema } from './OrganizationCreateOrConnectWithoutUserOrganizationsInputSchema';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';

export const OrganizationCreateNestedOneWithoutUserOrganizationsInputSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutUserOrganizationsInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutUserOrganizationsInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutUserOrganizationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutUserOrganizationsInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional()
}).strict();

export default OrganizationCreateNestedOneWithoutUserOrganizationsInputSchema;
