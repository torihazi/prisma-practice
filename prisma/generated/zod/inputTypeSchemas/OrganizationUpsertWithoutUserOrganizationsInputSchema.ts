import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { OrganizationUpdateWithoutUserOrganizationsInputSchema } from './OrganizationUpdateWithoutUserOrganizationsInputSchema';
import { OrganizationUncheckedUpdateWithoutUserOrganizationsInputSchema } from './OrganizationUncheckedUpdateWithoutUserOrganizationsInputSchema';
import { OrganizationCreateWithoutUserOrganizationsInputSchema } from './OrganizationCreateWithoutUserOrganizationsInputSchema';
import { OrganizationUncheckedCreateWithoutUserOrganizationsInputSchema } from './OrganizationUncheckedCreateWithoutUserOrganizationsInputSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';

export const OrganizationUpsertWithoutUserOrganizationsInputSchema: z.ZodType<Prisma.OrganizationUpsertWithoutUserOrganizationsInput> = z.object({
  update: z.union([ z.lazy(() => OrganizationUpdateWithoutUserOrganizationsInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutUserOrganizationsInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutUserOrganizationsInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutUserOrganizationsInputSchema) ]),
  where: z.lazy(() => OrganizationWhereInputSchema).optional()
}).strict();

export default OrganizationUpsertWithoutUserOrganizationsInputSchema;
