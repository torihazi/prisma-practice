import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { OrganizationIncludeSchema } from '../inputTypeSchemas/OrganizationIncludeSchema'
import { OrganizationWhereInputSchema } from '../inputTypeSchemas/OrganizationWhereInputSchema'
import { OrganizationOrderByWithRelationInputSchema } from '../inputTypeSchemas/OrganizationOrderByWithRelationInputSchema'
import { OrganizationWhereUniqueInputSchema } from '../inputTypeSchemas/OrganizationWhereUniqueInputSchema'
import { OrganizationScalarFieldEnumSchema } from '../inputTypeSchemas/OrganizationScalarFieldEnumSchema'
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

export const OrganizationFindFirstArgsSchema: z.ZodType<Prisma.OrganizationFindFirstArgs> = z.object({
  select: OrganizationSelectSchema.optional(),
  include: z.lazy(() => OrganizationIncludeSchema).optional(),
  where: OrganizationWhereInputSchema.optional(),
  orderBy: z.union([ OrganizationOrderByWithRelationInputSchema.array(),OrganizationOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganizationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrganizationScalarFieldEnumSchema,OrganizationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default OrganizationFindFirstArgsSchema;
