import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleWhereUniqueInputSchema } from './ArticleWhereUniqueInputSchema';
import { ArticleCreateWithoutOrganizationInputSchema } from './ArticleCreateWithoutOrganizationInputSchema';
import { ArticleUncheckedCreateWithoutOrganizationInputSchema } from './ArticleUncheckedCreateWithoutOrganizationInputSchema';

export const ArticleCreateOrConnectWithoutOrganizationInputSchema: z.ZodType<Prisma.ArticleCreateOrConnectWithoutOrganizationInput> = z.object({
  where: z.lazy(() => ArticleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ArticleCreateWithoutOrganizationInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutOrganizationInputSchema) ]),
}).strict();

export default ArticleCreateOrConnectWithoutOrganizationInputSchema;
