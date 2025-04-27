import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OrganizationSumOrderByAggregateInputSchema: z.ZodType<Prisma.OrganizationSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default OrganizationSumOrderByAggregateInputSchema;
