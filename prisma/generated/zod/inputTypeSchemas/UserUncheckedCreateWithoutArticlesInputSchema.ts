import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserOrganizationUncheckedCreateNestedManyWithoutUserInputSchema } from './UserOrganizationUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutArticlesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutArticlesInput> = z.object({
  id: z.number().int().optional(),
  userName: z.string().min(1).max(30),
  email: z.string().email().min(1).max(255),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userOrganizations: z.lazy(() => UserOrganizationUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutArticlesInputSchema;
