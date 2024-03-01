import { z } from 'zod';

export const modelocontratoSchema = z.object({
	cargo_id: z.string({ required_error: 'Escolha um carga' }).min(1, 'Escolha um cargo'),
	modelo: z.string({ required_error: 'Digite um modelo ' }).min(10, 'Digite um modelo valido'),
	numero_modelo: z.string({ required_error: 'Digite um número de modelo' }).min(1, 'Digite um número de modelo')
});
export type ModeloContratoSchema = z.infer<typeof modelocontratoSchema>