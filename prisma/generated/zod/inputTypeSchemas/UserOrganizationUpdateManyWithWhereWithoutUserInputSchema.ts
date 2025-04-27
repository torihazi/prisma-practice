import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserOrganizationScalarWhereInputSchema } from './UserOrganizationScalarWhereInputSchema';
import { UserOrganizationUpdateManyMutationInputSchema } from './UserOrganizationUpdateManyMutationInputSchema';
import { UserOrganizationUncheckedUpdateManyWithoutUserInputSchema } from './UserOrganizationUncheckedUpdateManyWithoutUserInputSchema';

export const UserOrganizationUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.UserOrganizationUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => UserOrganizationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserOrganizationUpdateManyMutationInputSchema),z.lazy(() => UserOrganizationUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default UserOrganizationUpdateManyWithWhereWithoutUserInputSchema;
