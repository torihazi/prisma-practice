import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { EnumRoleWithAggregatesFilterSchema } from './EnumRoleWithAggregatesFilterSchema';
import { RoleSchema } from './RoleSchema';

export const UserOrganizationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserOrganizationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserOrganizationScalarWhereWithAggregatesInputSchema),z.lazy(() => UserOrganizationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserOrganizationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserOrganizationScalarWhereWithAggregatesInputSchema),z.lazy(() => UserOrganizationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  organizationId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleWithAggregatesFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
}).strict();

export default UserOrganizationScalarWhereWithAggregatesInputSchema;
