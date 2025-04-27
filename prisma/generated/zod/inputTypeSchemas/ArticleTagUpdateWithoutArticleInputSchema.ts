import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TagUpdateOneRequiredWithoutArticleTagNestedInputSchema } from './TagUpdateOneRequiredWithoutArticleTagNestedInputSchema';

export const ArticleTagUpdateWithoutArticleInputSchema: z.ZodType<Prisma.ArticleTagUpdateWithoutArticleInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutArticleTagNestedInputSchema).optional()
}).strict();

export default ArticleTagUpdateWithoutArticleInputSchema;
