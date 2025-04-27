import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const ArticleIncludeSchema: z.ZodType<Prisma.ArticleInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default ArticleIncludeSchema;
