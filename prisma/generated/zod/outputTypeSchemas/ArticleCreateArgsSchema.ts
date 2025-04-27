import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { ArticleIncludeSchema } from '../inputTypeSchemas/ArticleIncludeSchema'
import { ArticleCreateInputSchema } from '../inputTypeSchemas/ArticleCreateInputSchema'
import { ArticleUncheckedCreateInputSchema } from '../inputTypeSchemas/ArticleUncheckedCreateInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { ArticleTagFindManyArgsSchema } from "../outputTypeSchemas/ArticleTagFindManyArgsSchema"
import { ArticleCountOutputTypeArgsSchema } from "../outputTypeSchemas/ArticleCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ArticleSelectSchema: z.ZodType<Prisma.ArticleSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  ArticleTag: z.union([z.boolean(),z.lazy(() => ArticleTagFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ArticleCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ArticleCreateArgsSchema: z.ZodType<Prisma.ArticleCreateArgs> = z.object({
  select: ArticleSelectSchema.optional(),
  include: z.lazy(() => ArticleIncludeSchema).optional(),
  data: z.union([ ArticleCreateInputSchema,ArticleUncheckedCreateInputSchema ]),
}).strict() ;

export default ArticleCreateArgsSchema;
