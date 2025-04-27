import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';

export const OrganizationCreateWithoutUserOrganizationsInputSchema: z.ZodType<Prisma.OrganizationCreateWithoutUserOrganizationsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string().min(1).max(30)
}).strict();

export default OrganizationCreateWithoutUserOrganizationsInputSchema;
