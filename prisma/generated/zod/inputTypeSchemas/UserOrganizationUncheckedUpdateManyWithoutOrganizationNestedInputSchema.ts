import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserOrganizationCreateWithoutOrganizationInputSchema } from './UserOrganizationCreateWithoutOrganizationInputSchema';
import { UserOrganizationUncheckedCreateWithoutOrganizationInputSchema } from './UserOrganizationUncheckedCreateWithoutOrganizationInputSchema';
import { UserOrganizationCreateOrConnectWithoutOrganizationInputSchema } from './UserOrganizationCreateOrConnectWithoutOrganizationInputSchema';
import { UserOrganizationUpsertWithWhereUniqueWithoutOrganizationInputSchema } from './UserOrganizationUpsertWithWhereUniqueWithoutOrganizationInputSchema';
import { UserOrganizationCreateManyOrganizationInputEnvelopeSchema } from './UserOrganizationCreateManyOrganizationInputEnvelopeSchema';
import { UserOrganizationWhereUniqueInputSchema } from './UserOrganizationWhereUniqueInputSchema';
import { UserOrganizationUpdateWithWhereUniqueWithoutOrganizationInputSchema } from './UserOrganizationUpdateWithWhereUniqueWithoutOrganizationInputSchema';
import { UserOrganizationUpdateManyWithWhereWithoutOrganizationInputSchema } from './UserOrganizationUpdateManyWithWhereWithoutOrganizationInputSchema';
import { UserOrganizationScalarWhereInputSchema } from './UserOrganizationScalarWhereInputSchema';

export const UserOrganizationUncheckedUpdateManyWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.UserOrganizationUncheckedUpdateManyWithoutOrganizationNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserOrganizationCreateWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationCreateWithoutOrganizationInputSchema).array(),z.lazy(() => UserOrganizationUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserOrganizationCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserOrganizationUpsertWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationUpsertWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserOrganizationCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserOrganizationWhereUniqueInputSchema),z.lazy(() => UserOrganizationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserOrganizationWhereUniqueInputSchema),z.lazy(() => UserOrganizationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserOrganizationWhereUniqueInputSchema),z.lazy(() => UserOrganizationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserOrganizationWhereUniqueInputSchema),z.lazy(() => UserOrganizationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserOrganizationUpdateWithWhereUniqueWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationUpdateWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserOrganizationUpdateManyWithWhereWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationUpdateManyWithWhereWithoutOrganizationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserOrganizationScalarWhereInputSchema),z.lazy(() => UserOrganizationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default UserOrganizationUncheckedUpdateManyWithoutOrganizationNestedInputSchema;
