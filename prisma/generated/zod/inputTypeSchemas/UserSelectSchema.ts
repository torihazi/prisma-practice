import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { ArticleFindManyArgsSchema } from "../outputTypeSchemas/ArticleFindManyArgsSchema"
import { UserOrganizationFindManyArgsSchema } from "../outputTypeSchemas/UserOrganizationFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  userName: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  articles: z.union([z.boolean(),z.lazy(() => ArticleFindManyArgsSchema)]).optional(),
  userOrganizations: z.union([z.boolean(),z.lazy(() => UserOrganizationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default UserSelectSchema;
