import { z } from 'zod';

export const RoleSchema = z.enum(['ADMIN','MEMBER']);

export type RoleType = `${z.infer<typeof RoleSchema>}`

export default RoleSchema;
