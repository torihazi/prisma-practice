import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserOrganizationScalarWhereInputSchema } from './UserOrganizationScalarWhereInputSchema';
import { UserOrganizationUpdateManyMutationInputSchema } from './UserOrganizationUpdateManyMutationInputSchema';
import { UserOrganizationUncheckedUpdateManyWithoutOrganizationInputSchema } from './UserOrganizationUncheckedUpdateManyWithoutOrganizationInputSchema';

export const UserOrganizationUpdateManyWithWhereWithoutOrganizationInputSchema: z.ZodType<Prisma.UserOrganizationUpdateManyWithWhereWithoutOrganizationInput> = z.object({
  where: z.lazy(() => UserOrganizationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserOrganizationUpdateManyMutationInputSchema),z.lazy(() => UserOrganizationUncheckedUpdateManyWithoutOrganizationInputSchema) ]),
}).strict();

export default UserOrganizationUpdateManyWithWhereWithoutOrganizationInputSchema;
