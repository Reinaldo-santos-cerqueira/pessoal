import { z } from 'zod';

export const tipodefolhaSchema = z.object({
	tipo_folha: z.string({required_error: 'Digite um tipo de folha'})
});
export type TipoDeFolhaSchema = z.infer<typeof tipodefolhaSchema>