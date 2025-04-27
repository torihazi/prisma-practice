import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ArticleScalarRelationFilterSchema } from './ArticleScalarRelationFilterSchema';
import { ArticleWhereInputSchema } from './ArticleWhereInputSchema';
import { TagScalarRelationFilterSchema } from './TagScalarRelationFilterSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const ArticleTagWhereInputSchema: z.ZodType<Prisma.ArticleTagWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ArticleTagWhereInputSchema),z.lazy(() => ArticleTagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ArticleTagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ArticleTagWhereInputSchema),z.lazy(() => ArticleTagWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  articleId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  article: z.union([ z.lazy(() => ArticleScalarRelationFilterSchema),z.lazy(() => ArticleWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => TagScalarRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
}).strict();

export default ArticleTagWhereInputSchema;
