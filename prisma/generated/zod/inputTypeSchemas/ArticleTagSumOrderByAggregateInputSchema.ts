import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ArticleTagSumOrderByAggregateInputSchema: z.ZodType<Prisma.ArticleTagSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  articleId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ArticleTagSumOrderByAggregateInputSchema;
