import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { UserOrganizationIncludeSchema } from '../inputTypeSchemas/UserOrganizationIncludeSchema'
import { UserOrganizationWhereUniqueInputSchema } from '../inputTypeSchemas/UserOrganizationWhereUniqueInputSchema'
import { UserOrganizationCreateInputSchema } from '../inputTypeSchemas/UserOrganizationCreateInputSchema'
import { UserOrganizationUncheckedCreateInputSchema } from '../inputTypeSchemas/UserOrganizationUncheckedCreateInputSchema'
import { UserOrganizationUpdateInputSchema } from '../inputTypeSchemas/UserOrganizationUpdateInputSchema'
import { UserOrganizationUncheckedUpdateInputSchema } from '../inputTypeSchemas/UserOrganizationUncheckedUpdateInputSchema'
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

export const UserOrganizationUpsertArgsSchema: z.ZodType<Prisma.UserOrganizationUpsertArgs> = z.object({
  select: UserOrganizationSelectSchema.optional(),
  include: z.lazy(() => UserOrganizationIncludeSchema).optional(),
  where: UserOrganizationWhereUniqueInputSchema,
  create: z.union([ UserOrganizationCreateInputSchema,UserOrganizationUncheckedCreateInputSchema ]),
  update: z.union([ UserOrganizationUpdateInputSchema,UserOrganizationUncheckedUpdateInputSchema ]),
}).strict() ;

export default UserOrganizationUpsertArgsSchema;
