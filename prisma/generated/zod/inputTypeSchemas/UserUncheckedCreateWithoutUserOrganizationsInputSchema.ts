import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleUncheckedCreateNestedManyWithoutUserInputSchema } from './ArticleUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutUserOrganizationsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutUserOrganizationsInput> = z.object({
  id: z.number().int().optional(),
  userName: z.string().min(1).max(30),
  email: z.string().email().min(1).max(255),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  articles: z.lazy(() => ArticleUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutUserOrganizationsInputSchema;
