import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';

export const OrganizationCountOutputTypeSelectSchema: z.ZodType<Prisma.OrganizationCountOutputTypeSelect> = z.object({
  userOrganizations: z.boolean().optional(),
  articles: z.boolean().optional(),
}).strict();

export default OrganizationCountOutputTypeSelectSchema;
