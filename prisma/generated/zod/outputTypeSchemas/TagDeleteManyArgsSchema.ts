import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { TagWhereInputSchema } from '../inputTypeSchemas/TagWhereInputSchema'

export const TagDeleteManyArgsSchema: z.ZodType<Prisma.TagDeleteManyArgs> = z.object({
  where: TagWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default TagDeleteManyArgsSchema;
