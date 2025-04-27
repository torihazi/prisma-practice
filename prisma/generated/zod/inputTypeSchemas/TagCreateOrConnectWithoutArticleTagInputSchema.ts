import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutArticleTagInputSchema } from './TagCreateWithoutArticleTagInputSchema';
import { TagUncheckedCreateWithoutArticleTagInputSchema } from './TagUncheckedCreateWithoutArticleTagInputSchema';

export const TagCreateOrConnectWithoutArticleTagInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutArticleTagInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutArticleTagInputSchema),z.lazy(() => TagUncheckedCreateWithoutArticleTagInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutArticleTagInputSchema;
