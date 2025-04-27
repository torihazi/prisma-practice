import { z } from 'zod';

/////////////////////////////////////////
// ORGANIZATION SCHEMA
/////////////////////////////////////////

export const OrganizationSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  name: z.string().min(1).max(30),
})

export type Organization = z.infer<typeof OrganizationSchema>

/////////////////////////////////////////
// ORGANIZATION PARTIAL SCHEMA
/////////////////////////////////////////

export const OrganizationPartialSchema = OrganizationSchema.partial()

export type OrganizationPartial = z.infer<typeof OrganizationPartialSchema>

/////////////////////////////////////////
// ORGANIZATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const OrganizationOptionalDefaultsSchema = OrganizationSchema.merge(z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type OrganizationOptionalDefaults = z.infer<typeof OrganizationOptionalDefaultsSchema>

export default OrganizationSchema;
