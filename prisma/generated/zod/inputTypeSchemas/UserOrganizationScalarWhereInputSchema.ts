import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumRoleFilterSchema } from './EnumRoleFilterSchema';
import { RoleSchema } from './RoleSchema';

export const UserOrganizationScalarWhereInputSchema: z.ZodType<Prisma.UserOrganizationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserOrganizationScalarWhereInputSchema),z.lazy(() => UserOrganizationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserOrganizationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserOrganizationScalarWhereInputSchema),z.lazy(() => UserOrganizationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  organizationId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
}).strict();

export default UserOrganizationScalarWhereInputSchema;
