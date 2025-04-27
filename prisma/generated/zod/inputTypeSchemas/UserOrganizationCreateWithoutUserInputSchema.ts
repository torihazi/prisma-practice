import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { OrganizationCreateNestedOneWithoutUserOrganizationsInputSchema } from './OrganizationCreateNestedOneWithoutUserOrganizationsInputSchema';

export const UserOrganizationCreateWithoutUserInputSchema: z.ZodType<Prisma.UserOrganizationCreateWithoutUserInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  role: z.lazy(() => RoleSchema).optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutUserOrganizationsInputSchema)
}).strict();

export default UserOrganizationCreateWithoutUserInputSchema;
