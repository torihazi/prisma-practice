import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';

export const UserCreateWithoutArticleInputSchema: z.ZodType<Prisma.UserCreateWithoutArticleInput> = z.object({
  userName: z.string().min(1).max(30),
  email: z.string().email().min(1).max(255),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default UserCreateWithoutArticleInputSchema;
