import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { TagUpdateWithoutArticleTagInputSchema } from './TagUpdateWithoutArticleTagInputSchema';
import { TagUncheckedUpdateWithoutArticleTagInputSchema } from './TagUncheckedUpdateWithoutArticleTagInputSchema';

export const TagUpdateToOneWithWhereWithoutArticleTagInputSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutArticleTagInput> = z.object({
  where: z.lazy(() => TagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TagUpdateWithoutArticleTagInputSchema),z.lazy(() => TagUncheckedUpdateWithoutArticleTagInputSchema) ]),
}).strict();

export default TagUpdateToOneWithWhereWithoutArticleTagInputSchema;
