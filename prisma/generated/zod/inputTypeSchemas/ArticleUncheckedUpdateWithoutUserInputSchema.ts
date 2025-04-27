import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ArticleTagUncheckedUpdateManyWithoutArticleNestedInputSchema } from './ArticleTagUncheckedUpdateManyWithoutArticleNestedInputSchema';

export const ArticleUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.ArticleUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(1).max(100),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string().min(1),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ArticleTag: z.lazy(() => ArticleTagUncheckedUpdateManyWithoutArticleNestedInputSchema).optional()
}).strict();

export default ArticleUncheckedUpdateWithoutUserInputSchema;
