import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { TagCreateWithoutArticleTagInputSchema } from './TagCreateWithoutArticleTagInputSchema';
import { TagUncheckedCreateWithoutArticleTagInputSchema } from './TagUncheckedCreateWithoutArticleTagInputSchema';
import { TagCreateOrConnectWithoutArticleTagInputSchema } from './TagCreateOrConnectWithoutArticleTagInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedOneWithoutArticleTagInputSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutArticleTagInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutArticleTagInputSchema),z.lazy(() => TagUncheckedCreateWithoutArticleTagInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutArticleTagInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional()
}).strict();

export default TagCreateNestedOneWithoutArticleTagInputSchema;
