import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { UserOrganizationCreateManyInputSchema } from '../inputTypeSchemas/UserOrganizationCreateManyInputSchema'

export const UserOrganizationCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserOrganizationCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserOrganizationCreateManyInputSchema,UserOrganizationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default UserOrganizationCreateManyAndReturnArgsSchema;
