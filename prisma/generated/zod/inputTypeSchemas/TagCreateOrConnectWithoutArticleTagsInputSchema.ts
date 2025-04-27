import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutArticleTagsInputSchema } from './TagCreateWithoutArticleTagsInputSchema';
import { TagUncheckedCreateWithoutArticleTagsInputSchema } from './TagUncheckedCreateWithoutArticleTagsInputSchema';

export const TagCreateOrConnectWithoutArticleTagsInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutArticleTagsInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutArticleTagsInputSchema),z.lazy(() => TagUncheckedCreateWithoutArticleTagsInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutArticleTagsInputSchema;
