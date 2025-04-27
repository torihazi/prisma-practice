import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { OrganizationIncludeSchema } from '../inputTypeSchemas/OrganizationIncludeSchema'
import { OrganizationCreateInputSchema } from '../inputTypeSchemas/OrganizationCreateInputSchema'
import { OrganizationUncheckedCreateInputSchema } from '../inputTypeSchemas/OrganizationUncheckedCreateInputSchema'
import { UserOrganizationFindManyArgsSchema } from "../outputTypeSchemas/UserOrganizationFindManyArgsSchema"
import { OrganizationCountOutputTypeArgsSchema } from "../outputTypeSchemas/OrganizationCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OrganizationSelectSchema: z.ZodType<Prisma.OrganizationSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  name: z.boolean().optional(),
  userOrganizations: z.union([z.boolean(),z.lazy(() => UserOrganizationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrganizationCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const OrganizationCreateArgsSchema: z.ZodType<Prisma.OrganizationCreateArgs> = z.object({
  select: OrganizationSelectSchema.optional(),
  include: z.lazy(() => OrganizationIncludeSchema).optional(),
  data: z.union([ OrganizationCreateInputSchema,OrganizationUncheckedCreateInputSchema ]),
}).strict() ;

export default OrganizationCreateArgsSchema;
