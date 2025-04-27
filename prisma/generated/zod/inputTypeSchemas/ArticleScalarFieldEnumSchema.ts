import { z } from 'zod';

export const ArticleScalarFieldEnumSchema = z.enum(['id','title','content','createdAt','updatedAt','userId']);

export default ArticleScalarFieldEnumSchema;
