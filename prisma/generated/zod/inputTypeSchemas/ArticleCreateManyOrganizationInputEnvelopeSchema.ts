import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleCreateManyOrganizationInputSchema } from './ArticleCreateManyOrganizationInputSchema';

export const ArticleCreateManyOrganizationInputEnvelopeSchema: z.ZodType<Prisma.ArticleCreateManyOrganizationInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ArticleCreateManyOrganizationInputSchema),z.lazy(() => ArticleCreateManyOrganizationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ArticleCreateManyOrganizationInputEnvelopeSchema;
