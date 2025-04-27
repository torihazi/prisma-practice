import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { UserOrganizationWhereInputSchema } from '../inputTypeSchemas/UserOrganizationWhereInputSchema'

export const UserOrganizationDeleteManyArgsSchema: z.ZodType<Prisma.UserOrganizationDeleteManyArgs> = z.object({
  where: UserOrganizationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default UserOrganizationDeleteManyArgsSchema;
