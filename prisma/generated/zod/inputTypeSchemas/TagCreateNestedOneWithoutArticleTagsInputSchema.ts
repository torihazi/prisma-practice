import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { TagCreateWithoutArticleTagsInputSchema } from './TagCreateWithoutArticleTagsInputSchema';
import { TagUncheckedCreateWithoutArticleTagsInputSchema } from './TagUncheckedCreateWithoutArticleTagsInputSchema';
import { TagCreateOrConnectWithoutArticleTagsInputSchema } from './TagCreateOrConnectWithoutArticleTagsInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedOneWithoutArticleTagsInputSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutArticleTagsInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutArticleTagsInputSchema),z.lazy(() => TagUncheckedCreateWithoutArticleTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutArticleTagsInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional()
}).strict();

export default TagCreateNestedOneWithoutArticleTagsInputSchema;
