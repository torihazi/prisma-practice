import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';

export const OrganizationUncheckedCreateWithoutUserOrganizationsInputSchema: z.ZodType<Prisma.OrganizationUncheckedCreateWithoutUserOrganizationsInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string().min(1).max(30)
}).strict();

export default OrganizationUncheckedCreateWithoutUserOrganizationsInputSchema;
