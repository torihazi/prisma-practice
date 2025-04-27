import { z } from 'zod';

/////////////////////////////////////////
// ARTICLE SCHEMA
/////////////////////////////////////////

export const ArticleSchema = z.object({
  id: z.number().int(),
  title: z.string().min(1).max(100),
  content: z.string().min(1),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  userId: z.number().int(),
})

export type Article = z.infer<typeof ArticleSchema>

/////////////////////////////////////////
// ARTICLE PARTIAL SCHEMA
/////////////////////////////////////////

export const ArticlePartialSchema = ArticleSchema.partial()

export type ArticlePartial = z.infer<typeof ArticlePartialSchema>

/////////////////////////////////////////
// ARTICLE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ArticleOptionalDefaultsSchema = ArticleSchema.merge(z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type ArticleOptionalDefaults = z.infer<typeof ArticleOptionalDefaultsSchema>

export default ArticleSchema;
