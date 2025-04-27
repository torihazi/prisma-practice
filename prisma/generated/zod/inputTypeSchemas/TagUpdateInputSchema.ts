import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ArticleTagUpdateManyWithoutTagNestedInputSchema } from './ArticleTagUpdateManyWithoutTagNestedInputSchema';

export const TagUpdateInputSchema: z.ZodType<Prisma.TagUpdateInput> = z.object({
  name: z.union([ z.string().min(1).max(30),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  articleTags: z.lazy(() => ArticleTagUpdateManyWithoutTagNestedInputSchema).optional()
}).strict();

export default TagUpdateInputSchema;
