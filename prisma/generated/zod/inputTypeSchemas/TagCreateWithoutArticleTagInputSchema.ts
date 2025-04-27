import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';

export const TagCreateWithoutArticleTagInputSchema: z.ZodType<Prisma.TagCreateWithoutArticleTagInput> = z.object({
  name: z.string().min(1).max(30),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default TagCreateWithoutArticleTagInputSchema;
