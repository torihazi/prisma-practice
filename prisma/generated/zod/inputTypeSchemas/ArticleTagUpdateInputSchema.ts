import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ArticleUpdateOneRequiredWithoutArticleTagNestedInputSchema } from './ArticleUpdateOneRequiredWithoutArticleTagNestedInputSchema';
import { TagUpdateOneRequiredWithoutArticleTagNestedInputSchema } from './TagUpdateOneRequiredWithoutArticleTagNestedInputSchema';

export const ArticleTagUpdateInputSchema: z.ZodType<Prisma.ArticleTagUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  article: z.lazy(() => ArticleUpdateOneRequiredWithoutArticleTagNestedInputSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutArticleTagNestedInputSchema).optional()
}).strict();

export default ArticleTagUpdateInputSchema;
