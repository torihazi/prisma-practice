import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { ArticleTagCreateManyArticleInputSchema } from './ArticleTagCreateManyArticleInputSchema';

export const ArticleTagCreateManyArticleInputEnvelopeSchema: z.ZodType<Prisma.ArticleTagCreateManyArticleInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ArticleTagCreateManyArticleInputSchema),z.lazy(() => ArticleTagCreateManyArticleInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ArticleTagCreateManyArticleInputEnvelopeSchema;
