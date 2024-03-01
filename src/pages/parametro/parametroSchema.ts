import { z } from 'zod';

export const parametrosSchema = z.object({
	centro_resultado: z.string({ required_error: 'Escolha um centro de resultado' }).min(1, 'Escolha um  centro de resultado'),
	limite_hora_extra_diario: z.string({ required_error: 'Digite um limite hora extra diario ' }).min(1, 'Digite um limite hora extra diario'),
	limite_hora_extra_mensal: z.string({ required_error: 'Digite um limite hora extra mensal ' }).min(1, 'Digite um limite hora extra mensal'),
	fornecedor_agrupador_id: z.string({ required_error: 'Escolha um fornecedor agrupador' }).min(1, 'Escolha um fornecedor agrupador'),
	insumo_mao_de_obra_id: z.string({ required_error: 'Escolha o insumo de obra' }).min(1, 'Escolha o insumo de obra'),
	servico_folha_pagamento_id: z.string({ required_error: 'Escolha o servico de folha de pagamento' }).min(1, 'Escolha o servico de folha de pagamento')
});
export type ParametrosSchema = z.infer<typeof parametrosSchema>