import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ArticleUpdateOneRequiredWithoutArticleTagsNestedInputSchema } from './ArticleUpdateOneRequiredWithoutArticleTagsNestedInputSchema';
import { TagUpdateOneRequiredWithoutArticleTagsNestedInputSchema } from './TagUpdateOneRequiredWithoutArticleTagsNestedInputSchema';

export const ArticleTagUpdateInputSchema: z.ZodType<Prisma.ArticleTagUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  article: z.lazy(() => ArticleUpdateOneRequiredWithoutArticleTagsNestedInputSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutArticleTagsNestedInputSchema).optional()
}).strict();

export default ArticleTagUpdateInputSchema;
