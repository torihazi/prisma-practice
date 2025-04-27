import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserOrganizationWhereInputSchema } from './UserOrganizationWhereInputSchema';

export const UserOrganizationListRelationFilterSchema: z.ZodType<Prisma.UserOrganizationListRelationFilter> = z.object({
  every: z.lazy(() => UserOrganizationWhereInputSchema).optional(),
  some: z.lazy(() => UserOrganizationWhereInputSchema).optional(),
  none: z.lazy(() => UserOrganizationWhereInputSchema).optional()
}).strict();

export default UserOrganizationListRelationFilterSchema;
