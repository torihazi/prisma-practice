import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserOrganizationWhereUniqueInputSchema } from './UserOrganizationWhereUniqueInputSchema';
import { UserOrganizationUpdateWithoutUserInputSchema } from './UserOrganizationUpdateWithoutUserInputSchema';
import { UserOrganizationUncheckedUpdateWithoutUserInputSchema } from './UserOrganizationUncheckedUpdateWithoutUserInputSchema';

export const UserOrganizationUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserOrganizationUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => UserOrganizationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserOrganizationUpdateWithoutUserInputSchema),z.lazy(() => UserOrganizationUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default UserOrganizationUpdateWithWhereUniqueWithoutUserInputSchema;
