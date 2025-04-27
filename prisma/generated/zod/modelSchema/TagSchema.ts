import { z } from 'zod';

/////////////////////////////////////////
// TAG SCHEMA
/////////////////////////////////////////

export const TagSchema = z.object({
  id: z.number().int(),
  name: z.string().min(1).max(30),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Tag = z.infer<typeof TagSchema>

/////////////////////////////////////////
// TAG PARTIAL SCHEMA
/////////////////////////////////////////

export const TagPartialSchema = TagSchema.partial()

export type TagPartial = z.infer<typeof TagPartialSchema>

/////////////////////////////////////////
// TAG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const TagOptionalDefaultsSchema = TagSchema.merge(z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type TagOptionalDefaults = z.infer<typeof TagOptionalDefaultsSchema>

export default TagSchema;
