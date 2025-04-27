import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleCreateWithoutOrganizationInputSchema } from './ArticleCreateWithoutOrganizationInputSchema';
import { ArticleUncheckedCreateWithoutOrganizationInputSchema } from './ArticleUncheckedCreateWithoutOrganizationInputSchema';
import { ArticleCreateOrConnectWithoutOrganizationInputSchema } from './ArticleCreateOrConnectWithoutOrganizationInputSchema';
import { ArticleCreateManyOrganizationInputEnvelopeSchema } from './ArticleCreateManyOrganizationInputEnvelopeSchema';
import { ArticleWhereUniqueInputSchema } from './ArticleWhereUniqueInputSchema';

export const ArticleCreateNestedManyWithoutOrganizationInputSchema: z.ZodType<Prisma.ArticleCreateNestedManyWithoutOrganizationInput> = z.object({
  create: z.union([ z.lazy(() => ArticleCreateWithoutOrganizationInputSchema),z.lazy(() => ArticleCreateWithoutOrganizationInputSchema).array(),z.lazy(() => ArticleUncheckedCreateWithoutOrganizationInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ArticleCreateOrConnectWithoutOrganizationInputSchema),z.lazy(() => ArticleCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ArticleCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ArticleCreateNestedManyWithoutOrganizationInputSchema;
