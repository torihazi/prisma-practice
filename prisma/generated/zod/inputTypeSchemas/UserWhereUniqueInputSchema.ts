import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ArticleListRelationFilterSchema } from './ArticleListRelationFilterSchema';

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    userName: z.string().min(1).max(30),
    email: z.string().email().min(1).max(255)
  }),
  z.object({
    id: z.number().int(),
    userName: z.string().min(1).max(30),
  }),
  z.object({
    id: z.number().int(),
    email: z.string().email().min(1).max(255),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    userName: z.string().min(1).max(30),
    email: z.string().email().min(1).max(255),
  }),
  z.object({
    userName: z.string().min(1).max(30),
  }),
  z.object({
    email: z.string().email().min(1).max(255),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  userName: z.string().min(1).max(30).optional(),
  email: z.string().email().min(1).max(255).optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  articles: z.lazy(() => ArticleListRelationFilterSchema).optional()
}).strict());

export default UserWhereUniqueInputSchema;
