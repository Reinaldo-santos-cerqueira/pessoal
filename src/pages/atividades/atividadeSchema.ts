import { z } from 'zod';

export const atividadeSchema = z.object({
	atividade: z.string({ required_error: 'Digite a atividade' }).min(1, 'Digite a atividade'),
});
export type AtividadeSchema = z.infer<typeof atividadeSchema>