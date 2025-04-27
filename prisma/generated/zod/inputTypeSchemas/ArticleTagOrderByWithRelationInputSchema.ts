import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ArticleOrderByWithRelationInputSchema } from './ArticleOrderByWithRelationInputSchema';
import { TagOrderByWithRelationInputSchema } from './TagOrderByWithRelationInputSchema';

export const ArticleTagOrderByWithRelationInputSchema: z.ZodType<Prisma.ArticleTagOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  articleId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  article: z.lazy(() => ArticleOrderByWithRelationInputSchema).optional(),
  tag: z.lazy(() => TagOrderByWithRelationInputSchema).optional()
}).strict();

export default ArticleTagOrderByWithRelationInputSchema;
