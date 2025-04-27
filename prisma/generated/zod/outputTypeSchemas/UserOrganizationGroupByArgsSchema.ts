import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { UserOrganizationWhereInputSchema } from '../inputTypeSchemas/UserOrganizationWhereInputSchema'
import { UserOrganizationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/UserOrganizationOrderByWithAggregationInputSchema'
import { UserOrganizationScalarFieldEnumSchema } from '../inputTypeSchemas/UserOrganizationScalarFieldEnumSchema'
import { UserOrganizationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/UserOrganizationScalarWhereWithAggregatesInputSchema'

export const UserOrganizationGroupByArgsSchema: z.ZodType<Prisma.UserOrganizationGroupByArgs> = z.object({
  where: UserOrganizationWhereInputSchema.optional(),
  orderBy: z.union([ UserOrganizationOrderByWithAggregationInputSchema.array(),UserOrganizationOrderByWithAggregationInputSchema ]).optional(),
  by: UserOrganizationScalarFieldEnumSchema.array(),
  having: UserOrganizationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default UserOrganizationGroupByArgsSchema;
