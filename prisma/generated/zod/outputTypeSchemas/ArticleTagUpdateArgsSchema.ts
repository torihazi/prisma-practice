import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { ArticleTagIncludeSchema } from '../inputTypeSchemas/ArticleTagIncludeSchema'
import { ArticleTagUpdateInputSchema } from '../inputTypeSchemas/ArticleTagUpdateInputSchema'
import { ArticleTagUncheckedUpdateInputSchema } from '../inputTypeSchemas/ArticleTagUncheckedUpdateInputSchema'
import { ArticleTagWhereUniqueInputSchema } from '../inputTypeSchemas/ArticleTagWhereUniqueInputSchema'
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

export const ArticleTagUpdateArgsSchema: z.ZodType<Prisma.ArticleTagUpdateArgs> = z.object({
  select: ArticleTagSelectSchema.optional(),
  include: z.lazy(() => ArticleTagIncludeSchema).optional(),
  data: z.union([ ArticleTagUpdateInputSchema,ArticleTagUncheckedUpdateInputSchema ]),
  where: ArticleTagWhereUniqueInputSchema,
}).strict() ;

export default ArticleTagUpdateArgsSchema;
