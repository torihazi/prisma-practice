import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserCreateWithoutUserOrganizationsInputSchema } from './UserCreateWithoutUserOrganizationsInputSchema';
import { UserUncheckedCreateWithoutUserOrganizationsInputSchema } from './UserUncheckedCreateWithoutUserOrganizationsInputSchema';
import { UserCreateOrConnectWithoutUserOrganizationsInputSchema } from './UserCreateOrConnectWithoutUserOrganizationsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutUserOrganizationsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUserOrganizationsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUserOrganizationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUserOrganizationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUserOrganizationsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutUserOrganizationsInputSchema;
