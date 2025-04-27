import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutUserOrganizationsInputSchema } from './UserCreateWithoutUserOrganizationsInputSchema';
import { UserUncheckedCreateWithoutUserOrganizationsInputSchema } from './UserUncheckedCreateWithoutUserOrganizationsInputSchema';

export const UserCreateOrConnectWithoutUserOrganizationsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUserOrganizationsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUserOrganizationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUserOrganizationsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutUserOrganizationsInputSchema;
