import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { TagUpdateManyMutationInputSchema } from '../inputTypeSchemas/TagUpdateManyMutationInputSchema'
import { TagUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TagUncheckedUpdateManyInputSchema'
import { TagWhereInputSchema } from '../inputTypeSchemas/TagWhereInputSchema'

export const TagUpdateManyArgsSchema: z.ZodType<Prisma.TagUpdateManyArgs> = z.object({
  data: z.union([ TagUpdateManyMutationInputSchema,TagUncheckedUpdateManyInputSchema ]),
  where: TagWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default TagUpdateManyArgsSchema;
