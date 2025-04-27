import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TagSumOrderByAggregateInputSchema: z.ZodType<Prisma.TagSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TagSumOrderByAggregateInputSchema;
