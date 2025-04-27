import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserOrganizationWhereUniqueInputSchema } from './UserOrganizationWhereUniqueInputSchema';
import { UserOrganizationCreateWithoutOrganizationInputSchema } from './UserOrganizationCreateWithoutOrganizationInputSchema';
import { UserOrganizationUncheckedCreateWithoutOrganizationInputSchema } from './UserOrganizationUncheckedCreateWithoutOrganizationInputSchema';

export const UserOrganizationCreateOrConnectWithoutOrganizationInputSchema: z.ZodType<Prisma.UserOrganizationCreateOrConnectWithoutOrganizationInput> = z.object({
  where: z.lazy(() => UserOrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserOrganizationCreateWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationUncheckedCreateWithoutOrganizationInputSchema) ]),
}).strict();

export default UserOrganizationCreateOrConnectWithoutOrganizationInputSchema;
