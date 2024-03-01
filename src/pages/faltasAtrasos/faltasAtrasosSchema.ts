import { z } from 'zod';

export const faltasatrasosSchema = z.object({
	funcionario_id: z.number({ required_error: 'Escolha um funcionario' }).int().min(1, 'Escolha um funcionario'),
	data_falta: z.string(),
	horas: z.string().min(1,'Digite a quantida de horas')
});
export type FaltasAtrasosSchema = z.infer<typeof faltasatrasosSchema>