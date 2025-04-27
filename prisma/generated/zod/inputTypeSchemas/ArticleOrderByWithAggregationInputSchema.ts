import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ArticleCountOrderByAggregateInputSchema } from './ArticleCountOrderByAggregateInputSchema';
import { ArticleAvgOrderByAggregateInputSchema } from './ArticleAvgOrderByAggregateInputSchema';
import { ArticleMaxOrderByAggregateInputSchema } from './ArticleMaxOrderByAggregateInputSchema';
import { ArticleMinOrderByAggregateInputSchema } from './ArticleMinOrderByAggregateInputSchema';
import { ArticleSumOrderByAggregateInputSchema } from './ArticleSumOrderByAggregateInputSchema';

export const ArticleOrderByWithAggregationInputSchema: z.ZodType<Prisma.ArticleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ArticleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ArticleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ArticleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ArticleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ArticleSumOrderByAggregateInputSchema).optional()
}).strict();

export default ArticleOrderByWithAggregationInputSchema;
