import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { ArticleTagFindManyArgsSchema } from "../outputTypeSchemas/ArticleTagFindManyArgsSchema"
import { TagCountOutputTypeArgsSchema } from "../outputTypeSchemas/TagCountOutputTypeArgsSchema"

export const TagIncludeSchema: z.ZodType<Prisma.TagInclude> = z.object({
  ArticleTag: z.union([z.boolean(),z.lazy(() => ArticleTagFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TagCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default TagIncludeSchema;
