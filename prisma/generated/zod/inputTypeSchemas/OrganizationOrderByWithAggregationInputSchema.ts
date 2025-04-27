import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { OrganizationCountOrderByAggregateInputSchema } from './OrganizationCountOrderByAggregateInputSchema';
import { OrganizationAvgOrderByAggregateInputSchema } from './OrganizationAvgOrderByAggregateInputSchema';
import { OrganizationMaxOrderByAggregateInputSchema } from './OrganizationMaxOrderByAggregateInputSchema';
import { OrganizationMinOrderByAggregateInputSchema } from './OrganizationMinOrderByAggregateInputSchema';
import { OrganizationSumOrderByAggregateInputSchema } from './OrganizationSumOrderByAggregateInputSchema';

export const OrganizationOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrganizationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OrganizationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OrganizationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OrganizationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OrganizationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OrganizationSumOrderByAggregateInputSchema).optional()
}).strict();

export default OrganizationOrderByWithAggregationInputSchema;
