import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { ArticleTagWhereInputSchema } from '../inputTypeSchemas/ArticleTagWhereInputSchema'
import { ArticleTagOrderByWithRelationInputSchema } from '../inputTypeSchemas/ArticleTagOrderByWithRelationInputSchema'
import { ArticleTagWhereUniqueInputSchema } from '../inputTypeSchemas/ArticleTagWhereUniqueInputSchema'

export const ArticleTagAggregateArgsSchema: z.ZodType<Prisma.ArticleTagAggregateArgs> = z.object({
  where: ArticleTagWhereInputSchema.optional(),
  orderBy: z.union([ ArticleTagOrderByWithRelationInputSchema.array(),ArticleTagOrderByWithRelationInputSchema ]).optional(),
  cursor: ArticleTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ArticleTagAggregateArgsSchema;
