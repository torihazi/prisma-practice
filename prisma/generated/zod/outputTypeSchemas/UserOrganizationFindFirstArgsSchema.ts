import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { UserOrganizationIncludeSchema } from '../inputTypeSchemas/UserOrganizationIncludeSchema'
import { UserOrganizationWhereInputSchema } from '../inputTypeSchemas/UserOrganizationWhereInputSchema'
import { UserOrganizationOrderByWithRelationInputSchema } from '../inputTypeSchemas/UserOrganizationOrderByWithRelationInputSchema'
import { UserOrganizationWhereUniqueInputSchema } from '../inputTypeSchemas/UserOrganizationWhereUniqueInputSchema'
import { UserOrganizationScalarFieldEnumSchema } from '../inputTypeSchemas/UserOrganizationScalarFieldEnumSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { OrganizationArgsSchema } from "../outputTypeSchemas/OrganizationArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserOrganizationSelectSchema: z.ZodType<Prisma.UserOrganizationSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  role: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
}).strict()

export const UserOrganizationFindFirstArgsSchema: z.ZodType<Prisma.UserOrganizationFindFirstArgs> = z.object({
  select: UserOrganizationSelectSchema.optional(),
  include: z.lazy(() => UserOrganizationIncludeSchema).optional(),
  where: UserOrganizationWhereInputSchema.optional(),
  orderBy: z.union([ UserOrganizationOrderByWithRelationInputSchema.array(),UserOrganizationOrderByWithRelationInputSchema ]).optional(),
  cursor: UserOrganizationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserOrganizationScalarFieldEnumSchema,UserOrganizationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default UserOrganizationFindFirstArgsSchema;
