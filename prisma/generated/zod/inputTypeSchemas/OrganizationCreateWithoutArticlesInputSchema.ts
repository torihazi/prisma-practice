import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserOrganizationCreateNestedManyWithoutOrganizationInputSchema } from './UserOrganizationCreateNestedManyWithoutOrganizationInputSchema';

export const OrganizationCreateWithoutArticlesInputSchema: z.ZodType<Prisma.OrganizationCreateWithoutArticlesInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string().min(1).max(30),
  userOrganizations: z.lazy(() => UserOrganizationCreateNestedManyWithoutOrganizationInputSchema).optional()
}).strict();

export default OrganizationCreateWithoutArticlesInputSchema;
