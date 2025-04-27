import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { ArticleTagCreateManyInputSchema } from '../inputTypeSchemas/ArticleTagCreateManyInputSchema'

export const ArticleTagCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ArticleTagCreateManyAndReturnArgs> = z.object({
  data: z.union([ ArticleTagCreateManyInputSchema,ArticleTagCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ArticleTagCreateManyAndReturnArgsSchema;
