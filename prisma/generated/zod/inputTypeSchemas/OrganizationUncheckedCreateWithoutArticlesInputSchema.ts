import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserOrganizationUncheckedCreateNestedManyWithoutOrganizationInputSchema } from './UserOrganizationUncheckedCreateNestedManyWithoutOrganizationInputSchema';

export const OrganizationUncheckedCreateWithoutArticlesInputSchema: z.ZodType<Prisma.OrganizationUncheckedCreateWithoutArticlesInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string().min(1).max(30),
  userOrganizations: z.lazy(() => UserOrganizationUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional()
}).strict();

export default OrganizationUncheckedCreateWithoutArticlesInputSchema;
