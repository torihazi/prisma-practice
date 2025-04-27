import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { UserOrganizationWhereInputSchema } from '../inputTypeSchemas/UserOrganizationWhereInputSchema'
import { UserOrganizationOrderByWithRelationInputSchema } from '../inputTypeSchemas/UserOrganizationOrderByWithRelationInputSchema'
import { UserOrganizationWhereUniqueInputSchema } from '../inputTypeSchemas/UserOrganizationWhereUniqueInputSchema'

export const UserOrganizationAggregateArgsSchema: z.ZodType<Prisma.UserOrganizationAggregateArgs> = z.object({
  where: UserOrganizationWhereInputSchema.optional(),
  orderBy: z.union([ UserOrganizationOrderByWithRelationInputSchema.array(),UserOrganizationOrderByWithRelationInputSchema ]).optional(),
  cursor: UserOrganizationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default UserOrganizationAggregateArgsSchema;
