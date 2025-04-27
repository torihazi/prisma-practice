import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { ArticleTagUpdateManyMutationInputSchema } from '../inputTypeSchemas/ArticleTagUpdateManyMutationInputSchema'
import { ArticleTagUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ArticleTagUncheckedUpdateManyInputSchema'
import { ArticleTagWhereInputSchema } from '../inputTypeSchemas/ArticleTagWhereInputSchema'

export const ArticleTagUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ArticleTagUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ArticleTagUpdateManyMutationInputSchema,ArticleTagUncheckedUpdateManyInputSchema ]),
  where: ArticleTagWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ArticleTagUpdateManyAndReturnArgsSchema;
