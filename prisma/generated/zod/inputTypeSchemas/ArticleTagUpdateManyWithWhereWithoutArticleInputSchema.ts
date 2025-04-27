import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleTagScalarWhereInputSchema } from './ArticleTagScalarWhereInputSchema';
import { ArticleTagUpdateManyMutationInputSchema } from './ArticleTagUpdateManyMutationInputSchema';
import { ArticleTagUncheckedUpdateManyWithoutArticleInputSchema } from './ArticleTagUncheckedUpdateManyWithoutArticleInputSchema';

export const ArticleTagUpdateManyWithWhereWithoutArticleInputSchema: z.ZodType<Prisma.ArticleTagUpdateManyWithWhereWithoutArticleInput> = z.object({
  where: z.lazy(() => ArticleTagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ArticleTagUpdateManyMutationInputSchema),z.lazy(() => ArticleTagUncheckedUpdateManyWithoutArticleInputSchema) ]),
}).strict();

export default ArticleTagUpdateManyWithWhereWithoutArticleInputSchema;
