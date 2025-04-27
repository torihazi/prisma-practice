import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserOrganizationCountOrderByAggregateInputSchema } from './UserOrganizationCountOrderByAggregateInputSchema';
import { UserOrganizationAvgOrderByAggregateInputSchema } from './UserOrganizationAvgOrderByAggregateInputSchema';
import { UserOrganizationMaxOrderByAggregateInputSchema } from './UserOrganizationMaxOrderByAggregateInputSchema';
import { UserOrganizationMinOrderByAggregateInputSchema } from './UserOrganizationMinOrderByAggregateInputSchema';
import { UserOrganizationSumOrderByAggregateInputSchema } from './UserOrganizationSumOrderByAggregateInputSchema';

export const UserOrganizationOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrganizationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserOrganizationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UserOrganizationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserOrganizationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserOrganizationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UserOrganizationSumOrderByAggregateInputSchema).optional()
}).strict();

export default UserOrganizationOrderByWithAggregationInputSchema;
