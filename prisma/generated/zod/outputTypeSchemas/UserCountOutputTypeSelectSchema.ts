import { z } from 'zod';
import type { Prisma } from '../../../../src/app/generated/prisma';

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  Article: z.boolean().optional(),
}).strict();

export default UserCountOutputTypeSelectSchema;
