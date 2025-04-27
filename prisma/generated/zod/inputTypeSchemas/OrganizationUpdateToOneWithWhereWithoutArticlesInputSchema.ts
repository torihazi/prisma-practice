import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { OrganizationUpdateWithoutArticlesInputSchema } from './OrganizationUpdateWithoutArticlesInputSchema';
import { OrganizationUncheckedUpdateWithoutArticlesInputSchema } from './OrganizationUncheckedUpdateWithoutArticlesInputSchema';

export const OrganizationUpdateToOneWithWhereWithoutArticlesInputSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutArticlesInput> = z.object({
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrganizationUpdateWithoutArticlesInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutArticlesInputSchema) ]),
}).strict();

export default OrganizationUpdateToOneWithWhereWithoutArticlesInputSchema;
