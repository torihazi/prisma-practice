import type { Prisma } from '../../../../src/app/generated/prisma';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutArticlesNestedInputSchema } from './UserUpdateOneRequiredWithoutArticlesNestedInputSchema';
import { OrganizationUpdateOneWithoutArticlesNestedInputSchema } from './OrganizationUpdateOneWithoutArticlesNestedInputSchema';

export const ArticleUpdateWithoutArticleTagsInputSchema: z.ZodType<Prisma.ArticleUpdateWithoutArticleTagsInput> = z.object({
  title: z.union([ z.string().min(1).max(100),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string().min(1),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutArticlesNestedInputSchema).optional(),
  organization: z.lazy(() => OrganizationUpdateOneWithoutArticlesNestedInputSchema).optional()
}).strict();

export default ArticleUpdateWithoutArticleTagsInputSchema;
