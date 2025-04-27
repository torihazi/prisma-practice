import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { TagUpdateWithoutArticleTagsInputSchema } from './TagUpdateWithoutArticleTagsInputSchema';
import { TagUncheckedUpdateWithoutArticleTagsInputSchema } from './TagUncheckedUpdateWithoutArticleTagsInputSchema';

export const TagUpdateToOneWithWhereWithoutArticleTagsInputSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutArticleTagsInput> = z.object({
  where: z.lazy(() => TagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TagUpdateWithoutArticleTagsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutArticleTagsInputSchema) ]),
}).strict();

export default TagUpdateToOneWithWhereWithoutArticleTagsInputSchema;
