import { z } from 'zod';

/////////////////////////////////////////
// ARTICLE TAG SCHEMA
/////////////////////////////////////////

export const ArticleTagSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  articleId: z.number().int(),
  tagId: z.number().int(),
})

export type ArticleTag = z.infer<typeof ArticleTagSchema>

/////////////////////////////////////////
// ARTICLE TAG PARTIAL SCHEMA
/////////////////////////////////////////

export const ArticleTagPartialSchema = ArticleTagSchema.partial()

export type ArticleTagPartial = z.infer<typeof ArticleTagPartialSchema>

/////////////////////////////////////////
// ARTICLE TAG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ArticleTagOptionalDefaultsSchema = ArticleTagSchema.merge(z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type ArticleTagOptionalDefaults = z.infer<typeof ArticleTagOptionalDefaultsSchema>

export default ArticleTagSchema;
