import { z } from 'zod';
import { RoleSchema } from '../inputTypeSchemas/RoleSchema'

/////////////////////////////////////////
// USER ORGANIZATION SCHEMA
/////////////////////////////////////////

export const UserOrganizationSchema = z.object({
  role: RoleSchema,
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  userId: z.number().int(),
  organizationId: z.number().int(),
})

export type UserOrganization = z.infer<typeof UserOrganizationSchema>

/////////////////////////////////////////
// USER ORGANIZATION PARTIAL SCHEMA
/////////////////////////////////////////

export const UserOrganizationPartialSchema = UserOrganizationSchema.partial()

export type UserOrganizationPartial = z.infer<typeof UserOrganizationPartialSchema>

/////////////////////////////////////////
// USER ORGANIZATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserOrganizationOptionalDefaultsSchema = UserOrganizationSchema.merge(z.object({
  role: RoleSchema.optional(),
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type UserOrganizationOptionalDefaults = z.infer<typeof UserOrganizationOptionalDefaultsSchema>

export default UserOrganizationSchema;
