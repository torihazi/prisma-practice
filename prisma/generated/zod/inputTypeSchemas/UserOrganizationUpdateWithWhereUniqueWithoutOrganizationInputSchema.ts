import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserOrganizationWhereUniqueInputSchema } from './UserOrganizationWhereUniqueInputSchema';
import { UserOrganizationUpdateWithoutOrganizationInputSchema } from './UserOrganizationUpdateWithoutOrganizationInputSchema';
import { UserOrganizationUncheckedUpdateWithoutOrganizationInputSchema } from './UserOrganizationUncheckedUpdateWithoutOrganizationInputSchema';

export const UserOrganizationUpdateWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.UserOrganizationUpdateWithWhereUniqueWithoutOrganizationInput> = z.object({
  where: z.lazy(() => UserOrganizationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserOrganizationUpdateWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationUncheckedUpdateWithoutOrganizationInputSchema) ]),
}).strict();

export default UserOrganizationUpdateWithWhereUniqueWithoutOrganizationInputSchema;
