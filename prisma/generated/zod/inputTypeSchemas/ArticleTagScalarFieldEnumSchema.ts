import { z } from 'zod';

export const ArticleTagScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','articleId','tagId']);

export default ArticleTagScalarFieldEnumSchema;
