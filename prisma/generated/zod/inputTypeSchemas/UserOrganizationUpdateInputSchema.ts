import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { RoleSchema } from './RoleSchema';
import { EnumRoleFieldUpdateOperationsInputSchema } from './EnumRoleFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutUserOrganizationsNestedInputSchema } from './UserUpdateOneRequiredWithoutUserOrganizationsNestedInputSchema';
import { OrganizationUpdateOneRequiredWithoutUserOrganizationsNestedInputSchema } from './OrganizationUpdateOneRequiredWithoutUserOrganizationsNestedInputSchema';

export const UserOrganizationUpdateInputSchema: z.ZodType<Prisma.UserOrganizationUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutUserOrganizationsNestedInputSchema).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutUserOrganizationsNestedInputSchema).optional()
}).strict();

export default UserOrganizationUpdateInputSchema;
