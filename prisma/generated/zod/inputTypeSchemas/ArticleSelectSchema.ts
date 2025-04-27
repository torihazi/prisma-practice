import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const ArticleSelectSchema: z.ZodType<Prisma.ArticleSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default ArticleSelectSchema;
