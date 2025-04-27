import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserCreateWithoutUserOrganizationsInputSchema } from './UserCreateWithoutUserOrganizationsInputSchema';
import { UserUncheckedCreateWithoutUserOrganizationsInputSchema } from './UserUncheckedCreateWithoutUserOrganizationsInputSchema';
import { UserCreateOrConnectWithoutUserOrganizationsInputSchema } from './UserCreateOrConnectWithoutUserOrganizationsInputSchema';
import { UserUpsertWithoutUserOrganizationsInputSchema } from './UserUpsertWithoutUserOrganizationsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutUserOrganizationsInputSchema } from './UserUpdateToOneWithWhereWithoutUserOrganizationsInputSchema';
import { UserUpdateWithoutUserOrganizationsInputSchema } from './UserUpdateWithoutUserOrganizationsInputSchema';
import { UserUncheckedUpdateWithoutUserOrganizationsInputSchema } from './UserUncheckedUpdateWithoutUserOrganizationsInputSchema';

export const UserUpdateOneRequiredWithoutUserOrganizationsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUserOrganizationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUserOrganizationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUserOrganizationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUserOrganizationsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUserOrganizationsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutUserOrganizationsInputSchema),z.lazy(() => UserUpdateWithoutUserOrganizationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUserOrganizationsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutUserOrganizationsNestedInputSchema;
