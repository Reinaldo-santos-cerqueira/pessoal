import { z } from 'zod';

export const encargoSchema = z.object({
	encargo: z.string({ required_error: 'Digite o encargo' }).min(1, 'Digite o encargo'),
});
export type EncargoSchema = z.infer<typeof encargoSchema>