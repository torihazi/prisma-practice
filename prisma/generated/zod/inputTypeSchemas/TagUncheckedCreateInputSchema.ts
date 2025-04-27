import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleTagUncheckedCreateNestedManyWithoutTagInputSchema } from './ArticleTagUncheckedCreateNestedManyWithoutTagInputSchema';

export const TagUncheckedCreateInputSchema: z.ZodType<Prisma.TagUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().min(1).max(30),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  articleTags: z.lazy(() => ArticleTagUncheckedCreateNestedManyWithoutTagInputSchema).optional()
}).strict();

export default TagUncheckedCreateInputSchema;
