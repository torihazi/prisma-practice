import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserOrganizationCreateWithoutUserInputSchema } from './UserOrganizationCreateWithoutUserInputSchema';
import { UserOrganizationUncheckedCreateWithoutUserInputSchema } from './UserOrganizationUncheckedCreateWithoutUserInputSchema';
import { UserOrganizationCreateOrConnectWithoutUserInputSchema } from './UserOrganizationCreateOrConnectWithoutUserInputSchema';
import { UserOrganizationUpsertWithWhereUniqueWithoutUserInputSchema } from './UserOrganizationUpsertWithWhereUniqueWithoutUserInputSchema';
import { UserOrganizationCreateManyUserInputEnvelopeSchema } from './UserOrganizationCreateManyUserInputEnvelopeSchema';
import { UserOrganizationWhereUniqueInputSchema } from './UserOrganizationWhereUniqueInputSchema';
import { UserOrganizationUpdateWithWhereUniqueWithoutUserInputSchema } from './UserOrganizationUpdateWithWhereUniqueWithoutUserInputSchema';
import { UserOrganizationUpdateManyWithWhereWithoutUserInputSchema } from './UserOrganizationUpdateManyWithWhereWithoutUserInputSchema';
import { UserOrganizationScalarWhereInputSchema } from './UserOrganizationScalarWhereInputSchema';

export const UserOrganizationUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UserOrganizationUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserOrganizationCreateWithoutUserInputSchema),z.lazy(() => UserOrganizationCreateWithoutUserInputSchema).array(),z.lazy(() => UserOrganizationUncheckedCreateWithoutUserInputSchema),z.lazy(() => UserOrganizationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserOrganizationCreateOrConnectWithoutUserInputSchema),z.lazy(() => UserOrganizationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserOrganizationUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UserOrganizationUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserOrganizationCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserOrganizationWhereUniqueInputSchema),z.lazy(() => UserOrganizationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserOrganizationWhereUniqueInputSchema),z.lazy(() => UserOrganizationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserOrganizationWhereUniqueInputSchema),z.lazy(() => UserOrganizationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserOrganizationWhereUniqueInputSchema),z.lazy(() => UserOrganizationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserOrganizationUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UserOrganizationUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserOrganizationUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => UserOrganizationUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserOrganizationScalarWhereInputSchema),z.lazy(() => UserOrganizationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default UserOrganizationUpdateManyWithoutUserNestedInputSchema;
