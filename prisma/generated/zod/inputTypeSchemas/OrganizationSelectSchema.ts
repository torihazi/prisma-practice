import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { UserOrganizationFindManyArgsSchema } from "../outputTypeSchemas/UserOrganizationFindManyArgsSchema"
import { OrganizationCountOutputTypeArgsSchema } from "../outputTypeSchemas/OrganizationCountOutputTypeArgsSchema"

export const OrganizationSelectSchema: z.ZodType<Prisma.OrganizationSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  name: z.boolean().optional(),
  userOrganizations: z.union([z.boolean(),z.lazy(() => UserOrganizationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrganizationCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default OrganizationSelectSchema;
