import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { ArticleTagIncludeSchema } from '../inputTypeSchemas/ArticleTagIncludeSchema'
import { ArticleTagWhereInputSchema } from '../inputTypeSchemas/ArticleTagWhereInputSchema'
import { ArticleTagOrderByWithRelationInputSchema } from '../inputTypeSchemas/ArticleTagOrderByWithRelationInputSchema'
import { ArticleTagWhereUniqueInputSchema } from '../inputTypeSchemas/ArticleTagWhereUniqueInputSchema'
import { ArticleTagScalarFieldEnumSchema } from '../inputTypeSchemas/ArticleTagScalarFieldEnumSchema'
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

export const ArticleTagFindManyArgsSchema: z.ZodType<Prisma.ArticleTagFindManyArgs> = z.object({
  select: ArticleTagSelectSchema.optional(),
  include: z.lazy(() => ArticleTagIncludeSchema).optional(),
  where: ArticleTagWhereInputSchema.optional(),
  orderBy: z.union([ ArticleTagOrderByWithRelationInputSchema.array(),ArticleTagOrderByWithRelationInputSchema ]).optional(),
  cursor: ArticleTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ArticleTagScalarFieldEnumSchema,ArticleTagScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ArticleTagFindManyArgsSchema;
