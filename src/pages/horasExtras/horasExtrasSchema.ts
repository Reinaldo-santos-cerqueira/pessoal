import { z } from 'zod';

export const horasextrasSchema = z.object({
	funcionario_id: z.string({ required_error: 'Escolha um funcionario' }).min(1, 'Escolha um funcionario'),
	autorizado_por: z.string({ required_error: 'Escolha um funcionario' }).min(1, 'Escolha um funcionario'),
	solicitante_id: z.string({ required_error: 'Escolha um solicitante' }).min(1, 'Escolha um solicitante'),
	data_solicitacao: z.string(),
	data_extra: z.string(),
	data_autorizacao: z.string(),
	status_solicitacao_id: z.string(),
	horas_extras: z.string().min(1, 'Digite a quantidade de horas extras'),
	observacao: z.string().min(1,'Digite uma observacao'),	
});
export type HorasExtrasSchema = z.infer<typeof horasextrasSchema>
