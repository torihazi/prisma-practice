import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';

export const UserOrganizationUncheckedCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.UserOrganizationUncheckedCreateWithoutOrganizationInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.number().int(),
  role: z.lazy(() => RoleSchema).optional()
}).strict();

export default UserOrganizationUncheckedCreateWithoutOrganizationInputSchema;
