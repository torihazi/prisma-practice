import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleTagWhereUniqueInputSchema } from './ArticleTagWhereUniqueInputSchema';
import { ArticleTagCreateWithoutTagInputSchema } from './ArticleTagCreateWithoutTagInputSchema';
import { ArticleTagUncheckedCreateWithoutTagInputSchema } from './ArticleTagUncheckedCreateWithoutTagInputSchema';

export const ArticleTagCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.ArticleTagCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => ArticleTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ArticleTagCreateWithoutTagInputSchema),z.lazy(() => ArticleTagUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default ArticleTagCreateOrConnectWithoutTagInputSchema;
