import { z } from 'zod';

export const afastamentoSchema = z.object({
	data_afastamento: z.string(),
	data_retorno: z.string(),
	motivo_afastamento: z.string({ required_error: 'Digite o motivo do afastamento ' }).min(1, 'Digite o motivo do afastamento '),
	funcionario_id: z.number({ required_error: 'Escolha um funcionario' }).int().min(1, 'Escolha um funcionario'),
	tipo_afastamento_id: z.string({ required_error: 'Escolha um tipo de afastamento ' }).min(1, 'Escolha um tipo de afastamento'),
});
export type AfastamentoSchema = z.infer<typeof afastamentoSchema>