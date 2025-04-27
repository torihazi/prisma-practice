import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { ArticleTagIncludeSchema } from '../inputTypeSchemas/ArticleTagIncludeSchema'
import { ArticleTagCreateInputSchema } from '../inputTypeSchemas/ArticleTagCreateInputSchema'
import { ArticleTagUncheckedCreateInputSchema } from '../inputTypeSchemas/ArticleTagUncheckedCreateInputSchema'
import { ArticleArgsSchema } from "../outputTypeSchemas/ArticleArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ArticleTagSelectSchema: z.ZodType<Prisma.ArticleTagSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  articleId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  article: z.union([z.boolean(),z.lazy(() => ArticleArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
}).strict()

export const ArticleTagCreateArgsSchema: z.ZodType<Prisma.ArticleTagCreateArgs> = z.object({
  select: ArticleTagSelectSchema.optional(),
  include: z.lazy(() => ArticleTagIncludeSchema).optional(),
  data: z.union([ ArticleTagCreateInputSchema,ArticleTagUncheckedCreateInputSchema ]),
}).strict() ;

export default ArticleTagCreateArgsSchema;
