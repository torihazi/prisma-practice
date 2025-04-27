import { z } from 'zod';

export const UserOrganizationScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','userId','organizationId','role']);

export default UserOrganizationScalarFieldEnumSchema;
