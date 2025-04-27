import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleWhereUniqueInputSchema } from './ArticleWhereUniqueInputSchema';
import { ArticleUpdateWithoutOrganizationInputSchema } from './ArticleUpdateWithoutOrganizationInputSchema';
import { ArticleUncheckedUpdateWithoutOrganizationInputSchema } from './ArticleUncheckedUpdateWithoutOrganizationInputSchema';
import { ArticleCreateWithoutOrganizationInputSchema } from './ArticleCreateWithoutOrganizationInputSchema';
import { ArticleUncheckedCreateWithoutOrganizationInputSchema } from './ArticleUncheckedCreateWithoutOrganizationInputSchema';

export const ArticleUpsertWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.ArticleUpsertWithWhereUniqueWithoutOrganizationInput> = z.object({
  where: z.lazy(() => ArticleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ArticleUpdateWithoutOrganizationInputSchema),z.lazy(() => ArticleUncheckedUpdateWithoutOrganizationInputSchema) ]),
  create: z.union([ z.lazy(() => ArticleCreateWithoutOrganizationInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutOrganizationInputSchema) ]),
}).strict();

export default ArticleUpsertWithWhereUniqueWithoutOrganizationInputSchema;
