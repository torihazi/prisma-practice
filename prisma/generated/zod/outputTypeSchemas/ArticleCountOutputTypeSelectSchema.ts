import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';

export const ArticleCountOutputTypeSelectSchema: z.ZodType<Prisma.ArticleCountOutputTypeSelect> = z.object({
  articleTags: z.boolean().optional(),
}).strict();

export default ArticleCountOutputTypeSelectSchema;
