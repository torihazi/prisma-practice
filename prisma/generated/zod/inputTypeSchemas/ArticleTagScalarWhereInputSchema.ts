import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ArticleTagScalarWhereInputSchema: z.ZodType<Prisma.ArticleTagScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ArticleTagScalarWhereInputSchema),z.lazy(() => ArticleTagScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ArticleTagScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ArticleTagScalarWhereInputSchema),z.lazy(() => ArticleTagScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  articleId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default ArticleTagScalarWhereInputSchema;
