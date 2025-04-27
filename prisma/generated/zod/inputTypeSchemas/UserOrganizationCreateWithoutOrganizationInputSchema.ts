import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { UserCreateNestedOneWithoutUserOrganizationsInputSchema } from './UserCreateNestedOneWithoutUserOrganizationsInputSchema';

export const UserOrganizationCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.UserOrganizationCreateWithoutOrganizationInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  role: z.lazy(() => RoleSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutUserOrganizationsInputSchema)
}).strict();

export default UserOrganizationCreateWithoutOrganizationInputSchema;
