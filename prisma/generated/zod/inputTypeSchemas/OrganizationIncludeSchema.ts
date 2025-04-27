import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { UserOrganizationFindManyArgsSchema } from "../outputTypeSchemas/UserOrganizationFindManyArgsSchema"
import { OrganizationCountOutputTypeArgsSchema } from "../outputTypeSchemas/OrganizationCountOutputTypeArgsSchema"

export const OrganizationIncludeSchema: z.ZodType<Prisma.OrganizationInclude> = z.object({
  userOrganizations: z.union([z.boolean(),z.lazy(() => UserOrganizationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrganizationCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default OrganizationIncludeSchema;
