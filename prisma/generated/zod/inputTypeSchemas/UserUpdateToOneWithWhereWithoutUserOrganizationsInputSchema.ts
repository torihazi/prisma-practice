import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutUserOrganizationsInputSchema } from './UserUpdateWithoutUserOrganizationsInputSchema';
import { UserUncheckedUpdateWithoutUserOrganizationsInputSchema } from './UserUncheckedUpdateWithoutUserOrganizationsInputSchema';

export const UserUpdateToOneWithWhereWithoutUserOrganizationsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUserOrganizationsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutUserOrganizationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUserOrganizationsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutUserOrganizationsInputSchema;
