import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    userName: z.string().min(1, { message: "user name is required" }).max(30, { message: "user name must be less than 30 characters" }),
    email: z.string().email().min(1, { message: "email is required" }).max(255, { message: "email must be less than 255 characters" })
  }),
  z.object({
    id: z.number().int(),
    userName: z.string().min(1, { message: "user name is required" }).max(30, { message: "user name must be less than 30 characters" }),
  }),
  z.object({
    id: z.number().int(),
    email: z.string().email().min(1, { message: "email is required" }).max(255, { message: "email must be less than 255 characters" }),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    userName: z.string().min(1, { message: "user name is required" }).max(30, { message: "user name must be less than 30 characters" }),
    email: z.string().email().min(1, { message: "email is required" }).max(255, { message: "email must be less than 255 characters" }),
  }),
  z.object({
    userName: z.string().min(1, { message: "user name is required" }).max(30, { message: "user name must be less than 30 characters" }),
  }),
  z.object({
    email: z.string().email().min(1, { message: "email is required" }).max(255, { message: "email must be less than 255 characters" }),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  userName: z.string().min(1, { message: "user name is required" }).max(30, { message: "user name must be less than 30 characters" }).optional(),
  email: z.string().email().min(1, { message: "email is required" }).max(255, { message: "email must be less than 255 characters" }).optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export default UserWhereUniqueInputSchema;
