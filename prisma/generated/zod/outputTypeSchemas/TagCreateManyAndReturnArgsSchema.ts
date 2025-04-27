import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';
import { TagCreateManyInputSchema } from '../inputTypeSchemas/TagCreateManyInputSchema'

export const TagCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TagCreateManyAndReturnArgs> = z.object({
  data: z.union([ TagCreateManyInputSchema,TagCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default TagCreateManyAndReturnArgsSchema;
