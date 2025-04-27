import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { TagUpdateWithoutArticleTagInputSchema } from './TagUpdateWithoutArticleTagInputSchema';
import { TagUncheckedUpdateWithoutArticleTagInputSchema } from './TagUncheckedUpdateWithoutArticleTagInputSchema';
import { TagCreateWithoutArticleTagInputSchema } from './TagCreateWithoutArticleTagInputSchema';
import { TagUncheckedCreateWithoutArticleTagInputSchema } from './TagUncheckedCreateWithoutArticleTagInputSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const TagUpsertWithoutArticleTagInputSchema: z.ZodType<Prisma.TagUpsertWithoutArticleTagInput> = z.object({
  update: z.union([ z.lazy(() => TagUpdateWithoutArticleTagInputSchema),z.lazy(() => TagUncheckedUpdateWithoutArticleTagInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutArticleTagInputSchema),z.lazy(() => TagUncheckedCreateWithoutArticleTagInputSchema) ]),
  where: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export default TagUpsertWithoutArticleTagInputSchema;
