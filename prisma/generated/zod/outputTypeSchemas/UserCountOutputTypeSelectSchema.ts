import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  articles: z.boolean().optional(),
}).strict();

export default UserCountOutputTypeSelectSchema;
