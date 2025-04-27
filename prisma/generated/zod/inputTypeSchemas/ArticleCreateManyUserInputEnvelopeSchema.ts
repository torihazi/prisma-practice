import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleCreateManyUserInputSchema } from './ArticleCreateManyUserInputSchema';

export const ArticleCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ArticleCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ArticleCreateManyUserInputSchema),z.lazy(() => ArticleCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ArticleCreateManyUserInputEnvelopeSchema;
