import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','userName','email','password','createdAt','updatedAt']);

export default UserScalarFieldEnumSchema;
