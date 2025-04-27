import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { ArticleTagSelectSchema } from '../inputTypeSchemas/ArticleTagSelectSchema';
import { ArticleTagIncludeSchema } from '../inputTypeSchemas/ArticleTagIncludeSchema';

export const ArticleTagArgsSchema: z.ZodType<Prisma.ArticleTagDefaultArgs> = z.object({
  select: z.lazy(() => ArticleTagSelectSchema).optional(),
  include: z.lazy(() => ArticleTagIncludeSchema).optional(),
}).strict();

export default ArticleTagArgsSchema;
