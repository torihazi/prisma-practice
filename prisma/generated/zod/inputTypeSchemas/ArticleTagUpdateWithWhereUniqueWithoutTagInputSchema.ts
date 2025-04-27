import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleTagWhereUniqueInputSchema } from './ArticleTagWhereUniqueInputSchema';
import { ArticleTagUpdateWithoutTagInputSchema } from './ArticleTagUpdateWithoutTagInputSchema';
import { ArticleTagUncheckedUpdateWithoutTagInputSchema } from './ArticleTagUncheckedUpdateWithoutTagInputSchema';

export const ArticleTagUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.ArticleTagUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => ArticleTagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ArticleTagUpdateWithoutTagInputSchema),z.lazy(() => ArticleTagUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export default ArticleTagUpdateWithWhereUniqueWithoutTagInputSchema;
