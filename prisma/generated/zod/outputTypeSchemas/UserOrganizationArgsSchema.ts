import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { UserOrganizationSelectSchema } from '../inputTypeSchemas/UserOrganizationSelectSchema';
import { UserOrganizationIncludeSchema } from '../inputTypeSchemas/UserOrganizationIncludeSchema';

export const UserOrganizationArgsSchema: z.ZodType<Prisma.UserOrganizationDefaultArgs> = z.object({
  select: z.lazy(() => UserOrganizationSelectSchema).optional(),
  include: z.lazy(() => UserOrganizationIncludeSchema).optional(),
}).strict();

export default UserOrganizationArgsSchema;
