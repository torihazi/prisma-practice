import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';

export const UserOrganizationUncheckedCreateInputSchema: z.ZodType<Prisma.UserOrganizationUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.number().int(),
  organizationId: z.number().int(),
  role: z.lazy(() => RoleSchema).optional()
}).strict();

export default UserOrganizationUncheckedCreateInputSchema;
