import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ArticleAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ArticleAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ArticleAvgOrderByAggregateInputSchema;
