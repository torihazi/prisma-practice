import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { OrganizationUpdateWithoutUserOrganizationsInputSchema } from './OrganizationUpdateWithoutUserOrganizationsInputSchema';
import { OrganizationUncheckedUpdateWithoutUserOrganizationsInputSchema } from './OrganizationUncheckedUpdateWithoutUserOrganizationsInputSchema';

export const OrganizationUpdateToOneWithWhereWithoutUserOrganizationsInputSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutUserOrganizationsInput> = z.object({
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrganizationUpdateWithoutUserOrganizationsInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutUserOrganizationsInputSchema) ]),
}).strict();

export default OrganizationUpdateToOneWithWhereWithoutUserOrganizationsInputSchema;
