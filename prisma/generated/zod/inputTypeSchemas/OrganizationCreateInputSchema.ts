import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserOrganizationCreateNestedManyWithoutOrganizationInputSchema } from './UserOrganizationCreateNestedManyWithoutOrganizationInputSchema';
import { ArticleCreateNestedManyWithoutOrganizationInputSchema } from './ArticleCreateNestedManyWithoutOrganizationInputSchema';

export const OrganizationCreateInputSchema: z.ZodType<Prisma.OrganizationCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string().min(1).max(30),
  userOrganizations: z.lazy(() => UserOrganizationCreateNestedManyWithoutOrganizationInputSchema).optional(),
  articles: z.lazy(() => ArticleCreateNestedManyWithoutOrganizationInputSchema).optional()
}).strict();

export default OrganizationCreateInputSchema;
