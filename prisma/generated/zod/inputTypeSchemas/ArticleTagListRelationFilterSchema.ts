import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleTagWhereInputSchema } from './ArticleTagWhereInputSchema';

export const ArticleTagListRelationFilterSchema: z.ZodType<Prisma.ArticleTagListRelationFilter> = z.object({
  every: z.lazy(() => ArticleTagWhereInputSchema).optional(),
  some: z.lazy(() => ArticleTagWhereInputSchema).optional(),
  none: z.lazy(() => ArticleTagWhereInputSchema).optional()
}).strict();

export default ArticleTagListRelationFilterSchema;
