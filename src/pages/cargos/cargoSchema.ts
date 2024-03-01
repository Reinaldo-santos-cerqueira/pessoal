import { z } from 'zod';

export const cargosSchema = z.object({
	cargo: z.string({ required_error: 'Digite o cargos' }).min(1, 'Digite o cargo'),
	remuneracao: z.string({ required_error: 'Digite a remuneração' }).min(1, 'Digite a remuneração'),
	comissao_direta: z.string({ required_error: 'Digite a comissão indireta' }).min(1, 'Digite a comissão indireta'),
	comissao_indireta: z.string({ required_error: 'Digite a comissão indireta' }).min(1, 'Digite a comissão indireta'),
	jornada_trabalho_id: z.string({ required_error: 'Escolha a jornada de trabalho' }).min(1, 'Escolha a jornada de trabalho'),
});
export type CargosSchema = z.infer<typeof cargosSchema>