import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { TagUpdateWithoutArticleTagsInputSchema } from './TagUpdateWithoutArticleTagsInputSchema';
import { TagUncheckedUpdateWithoutArticleTagsInputSchema } from './TagUncheckedUpdateWithoutArticleTagsInputSchema';
import { TagCreateWithoutArticleTagsInputSchema } from './TagCreateWithoutArticleTagsInputSchema';
import { TagUncheckedCreateWithoutArticleTagsInputSchema } from './TagUncheckedCreateWithoutArticleTagsInputSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const TagUpsertWithoutArticleTagsInputSchema: z.ZodType<Prisma.TagUpsertWithoutArticleTagsInput> = z.object({
  update: z.union([ z.lazy(() => TagUpdateWithoutArticleTagsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutArticleTagsInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutArticleTagsInputSchema),z.lazy(() => TagUncheckedCreateWithoutArticleTagsInputSchema) ]),
  where: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export default TagUpsertWithoutArticleTagsInputSchema;
