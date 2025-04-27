import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserOrganizationWhereUniqueInputSchema } from './UserOrganizationWhereUniqueInputSchema';
import { UserOrganizationCreateWithoutUserInputSchema } from './UserOrganizationCreateWithoutUserInputSchema';
import { UserOrganizationUncheckedCreateWithoutUserInputSchema } from './UserOrganizationUncheckedCreateWithoutUserInputSchema';

export const UserOrganizationCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.UserOrganizationCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => UserOrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserOrganizationCreateWithoutUserInputSchema),z.lazy(() => UserOrganizationUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default UserOrganizationCreateOrConnectWithoutUserInputSchema;
