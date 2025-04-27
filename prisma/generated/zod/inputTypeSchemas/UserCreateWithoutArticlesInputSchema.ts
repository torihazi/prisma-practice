import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserOrganizationCreateNestedManyWithoutUserInputSchema } from './UserOrganizationCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutArticlesInputSchema: z.ZodType<Prisma.UserCreateWithoutArticlesInput> = z.object({
  userName: z.string().min(1).max(30),
  email: z.string().email().min(1).max(255),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userOrganizations: z.lazy(() => UserOrganizationCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutArticlesInputSchema;
