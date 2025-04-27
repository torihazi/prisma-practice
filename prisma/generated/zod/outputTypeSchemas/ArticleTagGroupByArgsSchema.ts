import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { ArticleTagWhereInputSchema } from '../inputTypeSchemas/ArticleTagWhereInputSchema'
import { ArticleTagOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ArticleTagOrderByWithAggregationInputSchema'
import { ArticleTagScalarFieldEnumSchema } from '../inputTypeSchemas/ArticleTagScalarFieldEnumSchema'
import { ArticleTagScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ArticleTagScalarWhereWithAggregatesInputSchema'

export const ArticleTagGroupByArgsSchema: z.ZodType<Prisma.ArticleTagGroupByArgs> = z.object({
  where: ArticleTagWhereInputSchema.optional(),
  orderBy: z.union([ ArticleTagOrderByWithAggregationInputSchema.array(),ArticleTagOrderByWithAggregationInputSchema ]).optional(),
  by: ArticleTagScalarFieldEnumSchema.array(),
  having: ArticleTagScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ArticleTagGroupByArgsSchema;
