import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const TagScalarRelationFilterSchema: z.ZodType<Prisma.TagScalarRelationFilter> = z.object({
  is: z.lazy(() => TagWhereInputSchema).optional(),
  isNot: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export default TagScalarRelationFilterSchema;
