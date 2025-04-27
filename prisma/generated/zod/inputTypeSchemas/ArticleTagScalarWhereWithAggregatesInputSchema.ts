import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ArticleTagScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ArticleTagScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ArticleTagScalarWhereWithAggregatesInputSchema),z.lazy(() => ArticleTagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ArticleTagScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ArticleTagScalarWhereWithAggregatesInputSchema),z.lazy(() => ArticleTagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  articleId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default ArticleTagScalarWhereWithAggregatesInputSchema;
