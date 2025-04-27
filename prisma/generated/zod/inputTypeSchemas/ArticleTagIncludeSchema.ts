import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { ArticleArgsSchema } from "../outputTypeSchemas/ArticleArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"

export const ArticleTagIncludeSchema: z.ZodType<Prisma.ArticleTagInclude> = z.object({
  article: z.union([z.boolean(),z.lazy(() => ArticleArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
}).strict()

export default ArticleTagIncludeSchema;
