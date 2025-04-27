import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ArticleTagListRelationFilterSchema } from './ArticleTagListRelationFilterSchema';

export const TagWhereUniqueInputSchema: z.ZodType<Prisma.TagWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    name: z.string().min(1).max(30)
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    name: z.string().min(1).max(30),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  name: z.string().min(1).max(30).optional(),
  AND: z.union([ z.lazy(() => TagWhereInputSchema),z.lazy(() => TagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagWhereInputSchema),z.lazy(() => TagWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  articleTags: z.lazy(() => ArticleTagListRelationFilterSchema).optional()
}).strict());

export default TagWhereUniqueInputSchema;
