import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleUncheckedCreateNestedManyWithoutUserInputSchema } from './ArticleUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  userName: z.string().min(1).max(30),
  email: z.string().email().min(1).max(255),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Article: z.lazy(() => ArticleUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateInputSchema;
