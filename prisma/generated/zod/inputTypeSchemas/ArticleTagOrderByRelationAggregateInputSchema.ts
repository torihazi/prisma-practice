import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ArticleTagOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ArticleTagOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ArticleTagOrderByRelationAggregateInputSchema;
