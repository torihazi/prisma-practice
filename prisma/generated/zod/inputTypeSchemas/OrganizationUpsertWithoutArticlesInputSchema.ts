import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { OrganizationUpdateWithoutArticlesInputSchema } from './OrganizationUpdateWithoutArticlesInputSchema';
import { OrganizationUncheckedUpdateWithoutArticlesInputSchema } from './OrganizationUncheckedUpdateWithoutArticlesInputSchema';
import { OrganizationCreateWithoutArticlesInputSchema } from './OrganizationCreateWithoutArticlesInputSchema';
import { OrganizationUncheckedCreateWithoutArticlesInputSchema } from './OrganizationUncheckedCreateWithoutArticlesInputSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';

export const OrganizationUpsertWithoutArticlesInputSchema: z.ZodType<Prisma.OrganizationUpsertWithoutArticlesInput> = z.object({
  update: z.union([ z.lazy(() => OrganizationUpdateWithoutArticlesInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutArticlesInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutArticlesInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutArticlesInputSchema) ]),
  where: z.lazy(() => OrganizationWhereInputSchema).optional()
}).strict();

export default OrganizationUpsertWithoutArticlesInputSchema;
