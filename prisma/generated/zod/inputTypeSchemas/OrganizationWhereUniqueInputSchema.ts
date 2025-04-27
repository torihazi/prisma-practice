import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserOrganizationListRelationFilterSchema } from './UserOrganizationListRelationFilterSchema';

export const OrganizationWhereUniqueInputSchema: z.ZodType<Prisma.OrganizationWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    name: z.string().min(1).max(30)
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    name: z.string().min(1).max(30),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  name: z.string().min(1).max(30).optional(),
  AND: z.union([ z.lazy(() => OrganizationWhereInputSchema),z.lazy(() => OrganizationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrganizationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrganizationWhereInputSchema),z.lazy(() => OrganizationWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userOrganizations: z.lazy(() => UserOrganizationListRelationFilterSchema).optional()
}).strict());

export default OrganizationWhereUniqueInputSchema;
