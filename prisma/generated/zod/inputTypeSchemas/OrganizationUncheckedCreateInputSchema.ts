import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserOrganizationUncheckedCreateNestedManyWithoutOrganizationInputSchema } from './UserOrganizationUncheckedCreateNestedManyWithoutOrganizationInputSchema';
import { ArticleUncheckedCreateNestedManyWithoutOrganizationInputSchema } from './ArticleUncheckedCreateNestedManyWithoutOrganizationInputSchema';

export const OrganizationUncheckedCreateInputSchema: z.ZodType<Prisma.OrganizationUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string().min(1).max(30),
  userOrganizations: z.lazy(() => UserOrganizationUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  articles: z.lazy(() => ArticleUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional()
}).strict();

export default OrganizationUncheckedCreateInputSchema;
