import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { OrganizationCreateWithoutUserOrganizationsInputSchema } from './OrganizationCreateWithoutUserOrganizationsInputSchema';
import { OrganizationUncheckedCreateWithoutUserOrganizationsInputSchema } from './OrganizationUncheckedCreateWithoutUserOrganizationsInputSchema';
import { OrganizationCreateOrConnectWithoutUserOrganizationsInputSchema } from './OrganizationCreateOrConnectWithoutUserOrganizationsInputSchema';
import { OrganizationUpsertWithoutUserOrganizationsInputSchema } from './OrganizationUpsertWithoutUserOrganizationsInputSchema';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';
import { OrganizationUpdateToOneWithWhereWithoutUserOrganizationsInputSchema } from './OrganizationUpdateToOneWithWhereWithoutUserOrganizationsInputSchema';
import { OrganizationUpdateWithoutUserOrganizationsInputSchema } from './OrganizationUpdateWithoutUserOrganizationsInputSchema';
import { OrganizationUncheckedUpdateWithoutUserOrganizationsInputSchema } from './OrganizationUncheckedUpdateWithoutUserOrganizationsInputSchema';

export const OrganizationUpdateOneRequiredWithoutUserOrganizationsNestedInputSchema: z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutUserOrganizationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutUserOrganizationsInputSchema),z.lazy(() => OrganizationUncheckedCreateWithoutUserOrganizationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutUserOrganizationsInputSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutUserOrganizationsInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganizationUpdateToOneWithWhereWithoutUserOrganizationsInputSchema),z.lazy(() => OrganizationUpdateWithoutUserOrganizationsInputSchema),z.lazy(() => OrganizationUncheckedUpdateWithoutUserOrganizationsInputSchema) ]).optional(),
}).strict();

export default OrganizationUpdateOneRequiredWithoutUserOrganizationsNestedInputSchema;
