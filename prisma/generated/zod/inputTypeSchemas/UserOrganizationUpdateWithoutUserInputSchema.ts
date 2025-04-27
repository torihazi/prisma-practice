import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { RoleSchema } from './RoleSchema';
import { EnumRoleFieldUpdateOperationsInputSchema } from './EnumRoleFieldUpdateOperationsInputSchema';
import { OrganizationUpdateOneRequiredWithoutUserOrganizationsNestedInputSchema } from './OrganizationUpdateOneRequiredWithoutUserOrganizationsNestedInputSchema';

export const UserOrganizationUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserOrganizationUpdateWithoutUserInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutUserOrganizationsNestedInputSchema).optional()
}).strict();

export default UserOrganizationUpdateWithoutUserInputSchema;
