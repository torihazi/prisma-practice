import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserOrganizationWhereUniqueInputSchema } from './UserOrganizationWhereUniqueInputSchema';
import { UserOrganizationUpdateWithoutUserInputSchema } from './UserOrganizationUpdateWithoutUserInputSchema';
import { UserOrganizationUncheckedUpdateWithoutUserInputSchema } from './UserOrganizationUncheckedUpdateWithoutUserInputSchema';
import { UserOrganizationCreateWithoutUserInputSchema } from './UserOrganizationCreateWithoutUserInputSchema';
import { UserOrganizationUncheckedCreateWithoutUserInputSchema } from './UserOrganizationUncheckedCreateWithoutUserInputSchema';

export const UserOrganizationUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserOrganizationUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => UserOrganizationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserOrganizationUpdateWithoutUserInputSchema),z.lazy(() => UserOrganizationUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => UserOrganizationCreateWithoutUserInputSchema),z.lazy(() => UserOrganizationUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default UserOrganizationUpsertWithWhereUniqueWithoutUserInputSchema;
