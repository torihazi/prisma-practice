import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.number().int().optional(),
  userName: z.string().min(1, { message: "user name is required" }).max(30, { message: "user name must be less than 30 characters" }),
  email: z.string().email().min(1, { message: "email is required" }).max(255, { message: "email must be less than 255 characters" }),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default UserCreateManyInputSchema;
