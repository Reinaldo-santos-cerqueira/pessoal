import { z } from 'zod';

export const provisoesSchema = z.object({
	provisao: z.string({required_error: 'Digite uma provisão'})
});
export type ProvisoesSchema = z.infer<typeof provisoesSchema>