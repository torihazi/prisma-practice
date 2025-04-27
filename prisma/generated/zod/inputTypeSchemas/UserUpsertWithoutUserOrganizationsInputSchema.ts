import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserUpdateWithoutUserOrganizationsInputSchema } from './UserUpdateWithoutUserOrganizationsInputSchema';
import { UserUncheckedUpdateWithoutUserOrganizationsInputSchema } from './UserUncheckedUpdateWithoutUserOrganizationsInputSchema';
import { UserCreateWithoutUserOrganizationsInputSchema } from './UserCreateWithoutUserOrganizationsInputSchema';
import { UserUncheckedCreateWithoutUserOrganizationsInputSchema } from './UserUncheckedCreateWithoutUserOrganizationsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutUserOrganizationsInputSchema: z.ZodType<Prisma.UserUpsertWithoutUserOrganizationsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutUserOrganizationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUserOrganizationsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUserOrganizationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUserOrganizationsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutUserOrganizationsInputSchema;
