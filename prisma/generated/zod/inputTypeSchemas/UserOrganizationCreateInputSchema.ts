import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { UserCreateNestedOneWithoutUserOrganizationsInputSchema } from './UserCreateNestedOneWithoutUserOrganizationsInputSchema';
import { OrganizationCreateNestedOneWithoutUserOrganizationsInputSchema } from './OrganizationCreateNestedOneWithoutUserOrganizationsInputSchema';

export const UserOrganizationCreateInputSchema: z.ZodType<Prisma.UserOrganizationCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  role: z.lazy(() => RoleSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutUserOrganizationsInputSchema),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutUserOrganizationsInputSchema)
}).strict();

export default UserOrganizationCreateInputSchema;
