import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleTagWhereUniqueInputSchema } from './ArticleTagWhereUniqueInputSchema';
import { ArticleTagUpdateWithoutTagInputSchema } from './ArticleTagUpdateWithoutTagInputSchema';
import { ArticleTagUncheckedUpdateWithoutTagInputSchema } from './ArticleTagUncheckedUpdateWithoutTagInputSchema';
import { ArticleTagCreateWithoutTagInputSchema } from './ArticleTagCreateWithoutTagInputSchema';
import { ArticleTagUncheckedCreateWithoutTagInputSchema } from './ArticleTagUncheckedCreateWithoutTagInputSchema';

export const ArticleTagUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.ArticleTagUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => ArticleTagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ArticleTagUpdateWithoutTagInputSchema),z.lazy(() => ArticleTagUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => ArticleTagCreateWithoutTagInputSchema),z.lazy(() => ArticleTagUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default ArticleTagUpsertWithWhereUniqueWithoutTagInputSchema;
