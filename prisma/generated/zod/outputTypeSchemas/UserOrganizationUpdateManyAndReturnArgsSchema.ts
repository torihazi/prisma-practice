import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { UserOrganizationUpdateManyMutationInputSchema } from '../inputTypeSchemas/UserOrganizationUpdateManyMutationInputSchema'
import { UserOrganizationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/UserOrganizationUncheckedUpdateManyInputSchema'
import { UserOrganizationWhereInputSchema } from '../inputTypeSchemas/UserOrganizationWhereInputSchema'

export const UserOrganizationUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UserOrganizationUpdateManyAndReturnArgs> = z.object({
  data: z.union([ UserOrganizationUpdateManyMutationInputSchema,UserOrganizationUncheckedUpdateManyInputSchema ]),
  where: UserOrganizationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default UserOrganizationUpdateManyAndReturnArgsSchema;
