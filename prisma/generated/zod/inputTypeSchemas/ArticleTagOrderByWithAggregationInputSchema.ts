import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ArticleTagCountOrderByAggregateInputSchema } from './ArticleTagCountOrderByAggregateInputSchema';
import { ArticleTagAvgOrderByAggregateInputSchema } from './ArticleTagAvgOrderByAggregateInputSchema';
import { ArticleTagMaxOrderByAggregateInputSchema } from './ArticleTagMaxOrderByAggregateInputSchema';
import { ArticleTagMinOrderByAggregateInputSchema } from './ArticleTagMinOrderByAggregateInputSchema';
import { ArticleTagSumOrderByAggregateInputSchema } from './ArticleTagSumOrderByAggregateInputSchema';

export const ArticleTagOrderByWithAggregationInputSchema: z.ZodType<Prisma.ArticleTagOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  articleId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ArticleTagCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ArticleTagAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ArticleTagMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ArticleTagMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ArticleTagSumOrderByAggregateInputSchema).optional()
}).strict();

export default ArticleTagOrderByWithAggregationInputSchema;
