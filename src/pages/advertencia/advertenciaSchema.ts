import { z } from 'zod';

export const advertenciaSchema = z.object({
	funcionario_id: z.number({ required_error: 'Escolha um funcionario' }).int().min(1,'Escolha um funcionario'),
	responsavel_id: z.number({ required_error: 'Escolha um responsavel' }).int().min(1, 'Escolha um responsavel'),
	advertencia: z.string({ required_error: 'Digite uma advertencia' }).min(1,'Digite uma advertencia'),
	data: z.string({required_error: 'Data é obrigatório'}),
});
export type AdvertenciaSchema = z.infer<typeof advertenciaSchema>