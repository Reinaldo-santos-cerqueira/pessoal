import { z } from 'zod';

export const transferenciacrSchema = z.object({
	centro_resultado: z.number({ required_error: 'Escolha um centro de resultado' }).int().min(1, 'Escolha um  centro de resultado'),
	funcionario_id: z.number({ required_error: 'Escolha um funcionario' }).int().min(1, 'Escolha um funcionario'),
	data_inicio_trabalho: z.string({ required_error: 'Escolha uma data de inicio' }).min(10, 'Escolha uma data de inicio'),
});
export type TransferenciaCrSchema = z.infer<typeof transferenciacrSchema>