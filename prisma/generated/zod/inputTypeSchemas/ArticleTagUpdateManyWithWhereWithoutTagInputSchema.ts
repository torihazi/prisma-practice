import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleTagScalarWhereInputSchema } from './ArticleTagScalarWhereInputSchema';
import { ArticleTagUpdateManyMutationInputSchema } from './ArticleTagUpdateManyMutationInputSchema';
import { ArticleTagUncheckedUpdateManyWithoutTagInputSchema } from './ArticleTagUncheckedUpdateManyWithoutTagInputSchema';

export const ArticleTagUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.ArticleTagUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => ArticleTagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ArticleTagUpdateManyMutationInputSchema),z.lazy(() => ArticleTagUncheckedUpdateManyWithoutTagInputSchema) ]),
}).strict();

export default ArticleTagUpdateManyWithWhereWithoutTagInputSchema;
