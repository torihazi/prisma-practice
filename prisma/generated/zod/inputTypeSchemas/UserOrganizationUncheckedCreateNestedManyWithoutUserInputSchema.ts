import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserOrganizationCreateWithoutUserInputSchema } from './UserOrganizationCreateWithoutUserInputSchema';
import { UserOrganizationUncheckedCreateWithoutUserInputSchema } from './UserOrganizationUncheckedCreateWithoutUserInputSchema';
import { UserOrganizationCreateOrConnectWithoutUserInputSchema } from './UserOrganizationCreateOrConnectWithoutUserInputSchema';
import { UserOrganizationCreateManyUserInputEnvelopeSchema } from './UserOrganizationCreateManyUserInputEnvelopeSchema';
import { UserOrganizationWhereUniqueInputSchema } from './UserOrganizationWhereUniqueInputSchema';

export const UserOrganizationUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UserOrganizationUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UserOrganizationCreateWithoutUserInputSchema),z.lazy(() => UserOrganizationCreateWithoutUserInputSchema).array(),z.lazy(() => UserOrganizationUncheckedCreateWithoutUserInputSchema),z.lazy(() => UserOrganizationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserOrganizationCreateOrConnectWithoutUserInputSchema),z.lazy(() => UserOrganizationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserOrganizationCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserOrganizationWhereUniqueInputSchema),z.lazy(() => UserOrganizationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default UserOrganizationUncheckedCreateNestedManyWithoutUserInputSchema;
