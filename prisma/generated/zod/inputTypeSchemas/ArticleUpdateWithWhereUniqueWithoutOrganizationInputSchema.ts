import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleWhereUniqueInputSchema } from './ArticleWhereUniqueInputSchema';
import { ArticleUpdateWithoutOrganizationInputSchema } from './ArticleUpdateWithoutOrganizationInputSchema';
import { ArticleUncheckedUpdateWithoutOrganizationInputSchema } from './ArticleUncheckedUpdateWithoutOrganizationInputSchema';

export const ArticleUpdateWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.ArticleUpdateWithWhereUniqueWithoutOrganizationInput> = z.object({
  where: z.lazy(() => ArticleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ArticleUpdateWithoutOrganizationInputSchema),z.lazy(() => ArticleUncheckedUpdateWithoutOrganizationInputSchema) ]),
}).strict();

export default ArticleUpdateWithWhereUniqueWithoutOrganizationInputSchema;
