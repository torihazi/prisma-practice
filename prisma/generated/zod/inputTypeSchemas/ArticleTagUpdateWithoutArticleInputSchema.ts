import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TagUpdateOneRequiredWithoutArticleTagsNestedInputSchema } from './TagUpdateOneRequiredWithoutArticleTagsNestedInputSchema';

export const ArticleTagUpdateWithoutArticleInputSchema: z.ZodType<Prisma.ArticleTagUpdateWithoutArticleInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutArticleTagsNestedInputSchema).optional()
}).strict();

export default ArticleTagUpdateWithoutArticleInputSchema;
