import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { TagCreateWithoutArticleTagsInputSchema } from './TagCreateWithoutArticleTagsInputSchema';
import { TagUncheckedCreateWithoutArticleTagsInputSchema } from './TagUncheckedCreateWithoutArticleTagsInputSchema';
import { TagCreateOrConnectWithoutArticleTagsInputSchema } from './TagCreateOrConnectWithoutArticleTagsInputSchema';
import { TagUpsertWithoutArticleTagsInputSchema } from './TagUpsertWithoutArticleTagsInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateToOneWithWhereWithoutArticleTagsInputSchema } from './TagUpdateToOneWithWhereWithoutArticleTagsInputSchema';
import { TagUpdateWithoutArticleTagsInputSchema } from './TagUpdateWithoutArticleTagsInputSchema';
import { TagUncheckedUpdateWithoutArticleTagsInputSchema } from './TagUncheckedUpdateWithoutArticleTagsInputSchema';

export const TagUpdateOneRequiredWithoutArticleTagsNestedInputSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutArticleTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutArticleTagsInputSchema),z.lazy(() => TagUncheckedCreateWithoutArticleTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutArticleTagsInputSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutArticleTagsInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TagUpdateToOneWithWhereWithoutArticleTagsInputSchema),z.lazy(() => TagUpdateWithoutArticleTagsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutArticleTagsInputSchema) ]).optional(),
}).strict();

export default TagUpdateOneRequiredWithoutArticleTagsNestedInputSchema;
