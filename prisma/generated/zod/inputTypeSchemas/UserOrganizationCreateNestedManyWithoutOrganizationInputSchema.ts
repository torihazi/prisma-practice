import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserOrganizationCreateWithoutOrganizationInputSchema } from './UserOrganizationCreateWithoutOrganizationInputSchema';
import { UserOrganizationUncheckedCreateWithoutOrganizationInputSchema } from './UserOrganizationUncheckedCreateWithoutOrganizationInputSchema';
import { UserOrganizationCreateOrConnectWithoutOrganizationInputSchema } from './UserOrganizationCreateOrConnectWithoutOrganizationInputSchema';
import { UserOrganizationCreateManyOrganizationInputEnvelopeSchema } from './UserOrganizationCreateManyOrganizationInputEnvelopeSchema';
import { UserOrganizationWhereUniqueInputSchema } from './UserOrganizationWhereUniqueInputSchema';

export const UserOrganizationCreateNestedManyWithoutOrganizationInputSchema: z.ZodType<Prisma.UserOrganizationCreateNestedManyWithoutOrganizationInput> = z.object({
  create: z.union([ z.lazy(() => UserOrganizationCreateWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationCreateWithoutOrganizationInputSchema).array(),z.lazy(() => UserOrganizationUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserOrganizationCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserOrganizationCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserOrganizationWhereUniqueInputSchema),z.lazy(() => UserOrganizationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default UserOrganizationCreateNestedManyWithoutOrganizationInputSchema;
