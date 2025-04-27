import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ArticleUpdateOneRequiredWithoutArticleTagsNestedInputSchema } from './ArticleUpdateOneRequiredWithoutArticleTagsNestedInputSchema';

export const ArticleTagUpdateWithoutTagInputSchema: z.ZodType<Prisma.ArticleTagUpdateWithoutTagInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  article: z.lazy(() => ArticleUpdateOneRequiredWithoutArticleTagsNestedInputSchema).optional()
}).strict();

export default ArticleTagUpdateWithoutTagInputSchema;
