import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { TagIncludeSchema } from '../inputTypeSchemas/TagIncludeSchema'
import { TagCreateInputSchema } from '../inputTypeSchemas/TagCreateInputSchema'
import { TagUncheckedCreateInputSchema } from '../inputTypeSchemas/TagUncheckedCreateInputSchema'
import { ArticleTagFindManyArgsSchema } from "../outputTypeSchemas/ArticleTagFindManyArgsSchema"
import { TagCountOutputTypeArgsSchema } from "../outputTypeSchemas/TagCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TagSelectSchema: z.ZodType<Prisma.TagSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  ArticleTag: z.union([z.boolean(),z.lazy(() => ArticleTagFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TagCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TagCreateArgsSchema: z.ZodType<Prisma.TagCreateArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: z.lazy(() => TagIncludeSchema).optional(),
  data: z.union([ TagCreateInputSchema,TagUncheckedCreateInputSchema ]),
}).strict() ;

export default TagCreateArgsSchema;
