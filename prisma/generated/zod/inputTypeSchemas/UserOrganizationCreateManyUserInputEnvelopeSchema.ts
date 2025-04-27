import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserOrganizationCreateManyUserInputSchema } from './UserOrganizationCreateManyUserInputSchema';

export const UserOrganizationCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.UserOrganizationCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserOrganizationCreateManyUserInputSchema),z.lazy(() => UserOrganizationCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default UserOrganizationCreateManyUserInputEnvelopeSchema;
