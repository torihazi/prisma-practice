import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { OrganizationArgsSchema } from "../outputTypeSchemas/OrganizationArgsSchema"

export const UserOrganizationIncludeSchema: z.ZodType<Prisma.UserOrganizationInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
}).strict()

export default UserOrganizationIncludeSchema;
