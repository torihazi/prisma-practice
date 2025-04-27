import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserOrganizationCreateManyOrganizationInputSchema } from './UserOrganizationCreateManyOrganizationInputSchema';

export const UserOrganizationCreateManyOrganizationInputEnvelopeSchema: z.ZodType<Prisma.UserOrganizationCreateManyOrganizationInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserOrganizationCreateManyOrganizationInputSchema),z.lazy(() => UserOrganizationCreateManyOrganizationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default UserOrganizationCreateManyOrganizationInputEnvelopeSchema;
