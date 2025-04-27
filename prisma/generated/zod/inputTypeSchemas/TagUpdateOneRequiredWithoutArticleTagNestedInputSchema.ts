import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { TagCreateWithoutArticleTagInputSchema } from './TagCreateWithoutArticleTagInputSchema';
import { TagUncheckedCreateWithoutArticleTagInputSchema } from './TagUncheckedCreateWithoutArticleTagInputSchema';
import { TagCreateOrConnectWithoutArticleTagInputSchema } from './TagCreateOrConnectWithoutArticleTagInputSchema';
import { TagUpsertWithoutArticleTagInputSchema } from './TagUpsertWithoutArticleTagInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateToOneWithWhereWithoutArticleTagInputSchema } from './TagUpdateToOneWithWhereWithoutArticleTagInputSchema';
import { TagUpdateWithoutArticleTagInputSchema } from './TagUpdateWithoutArticleTagInputSchema';
import { TagUncheckedUpdateWithoutArticleTagInputSchema } from './TagUncheckedUpdateWithoutArticleTagInputSchema';

export const TagUpdateOneRequiredWithoutArticleTagNestedInputSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutArticleTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutArticleTagInputSchema),z.lazy(() => TagUncheckedCreateWithoutArticleTagInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutArticleTagInputSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutArticleTagInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TagUpdateToOneWithWhereWithoutArticleTagInputSchema),z.lazy(() => TagUpdateWithoutArticleTagInputSchema),z.lazy(() => TagUncheckedUpdateWithoutArticleTagInputSchema) ]).optional(),
}).strict();

export default TagUpdateOneRequiredWithoutArticleTagNestedInputSchema;
