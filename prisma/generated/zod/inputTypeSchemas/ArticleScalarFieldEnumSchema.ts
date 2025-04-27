import { z } from 'zod';

export const ArticleScalarFieldEnumSchema = z.enum(['id','title','content','createdAt','updatedAt','userId','organizationId']);

export default ArticleScalarFieldEnumSchema;
