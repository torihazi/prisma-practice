import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { ArticleFindManyArgsSchema } from "../outputTypeSchemas/ArticleFindManyArgsSchema"
import { UserOrganizationFindManyArgsSchema } from "../outputTypeSchemas/UserOrganizationFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  articles: z.union([z.boolean(),z.lazy(() => ArticleFindManyArgsSchema)]).optional(),
  userOrganizations: z.union([z.boolean(),z.lazy(() => UserOrganizationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default UserIncludeSchema;
