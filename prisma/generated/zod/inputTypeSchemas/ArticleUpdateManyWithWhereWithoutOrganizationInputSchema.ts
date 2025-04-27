import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleScalarWhereInputSchema } from './ArticleScalarWhereInputSchema';
import { ArticleUpdateManyMutationInputSchema } from './ArticleUpdateManyMutationInputSchema';
import { ArticleUncheckedUpdateManyWithoutOrganizationInputSchema } from './ArticleUncheckedUpdateManyWithoutOrganizationInputSchema';

export const ArticleUpdateManyWithWhereWithoutOrganizationInputSchema: z.ZodType<Prisma.ArticleUpdateManyWithWhereWithoutOrganizationInput> = z.object({
  where: z.lazy(() => ArticleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ArticleUpdateManyMutationInputSchema),z.lazy(() => ArticleUncheckedUpdateManyWithoutOrganizationInputSchema) ]),
}).strict();

export default ArticleUpdateManyWithWhereWithoutOrganizationInputSchema;
