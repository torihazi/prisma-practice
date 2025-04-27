import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleTagCreateManyTagInputSchema } from './ArticleTagCreateManyTagInputSchema';

export const ArticleTagCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.ArticleTagCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ArticleTagCreateManyTagInputSchema),z.lazy(() => ArticleTagCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ArticleTagCreateManyTagInputEnvelopeSchema;
