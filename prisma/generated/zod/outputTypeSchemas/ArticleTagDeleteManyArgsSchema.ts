import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { ArticleTagWhereInputSchema } from '../inputTypeSchemas/ArticleTagWhereInputSchema'

export const ArticleTagDeleteManyArgsSchema: z.ZodType<Prisma.ArticleTagDeleteManyArgs> = z.object({
  where: ArticleTagWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ArticleTagDeleteManyArgsSchema;
