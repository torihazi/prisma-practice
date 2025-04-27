import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { UserOrganizationIncludeSchema } from '../inputTypeSchemas/UserOrganizationIncludeSchema'
import { UserOrganizationUpdateInputSchema } from '../inputTypeSchemas/UserOrganizationUpdateInputSchema'
import { UserOrganizationUncheckedUpdateInputSchema } from '../inputTypeSchemas/UserOrganizationUncheckedUpdateInputSchema'
import { UserOrganizationWhereUniqueInputSchema } from '../inputTypeSchemas/UserOrganizationWhereUniqueInputSchema'
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

export const UserOrganizationUpdateArgsSchema: z.ZodType<Prisma.UserOrganizationUpdateArgs> = z.object({
  select: UserOrganizationSelectSchema.optional(),
  include: z.lazy(() => UserOrganizationIncludeSchema).optional(),
  data: z.union([ UserOrganizationUpdateInputSchema,UserOrganizationUncheckedUpdateInputSchema ]),
  where: UserOrganizationWhereUniqueInputSchema,
}).strict() ;

export default UserOrganizationUpdateArgsSchema;
