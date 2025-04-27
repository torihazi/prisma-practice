import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { UserOrganizationWhereUniqueInputSchema } from './UserOrganizationWhereUniqueInputSchema';
import { UserOrganizationUpdateWithoutOrganizationInputSchema } from './UserOrganizationUpdateWithoutOrganizationInputSchema';
import { UserOrganizationUncheckedUpdateWithoutOrganizationInputSchema } from './UserOrganizationUncheckedUpdateWithoutOrganizationInputSchema';
import { UserOrganizationCreateWithoutOrganizationInputSchema } from './UserOrganizationCreateWithoutOrganizationInputSchema';
import { UserOrganizationUncheckedCreateWithoutOrganizationInputSchema } from './UserOrganizationUncheckedCreateWithoutOrganizationInputSchema';

export const UserOrganizationUpsertWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.UserOrganizationUpsertWithWhereUniqueWithoutOrganizationInput> = z.object({
  where: z.lazy(() => UserOrganizationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserOrganizationUpdateWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationUncheckedUpdateWithoutOrganizationInputSchema) ]),
  create: z.union([ z.lazy(() => UserOrganizationCreateWithoutOrganizationInputSchema),z.lazy(() => UserOrganizationUncheckedCreateWithoutOrganizationInputSchema) ]),
}).strict();

export default UserOrganizationUpsertWithWhereUniqueWithoutOrganizationInputSchema;
