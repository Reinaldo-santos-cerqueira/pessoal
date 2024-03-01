import { axiosInstance } from '../../service/config';
import { Parametro } from './types';

const get = async (): Promise<Parametro[]> =>{
	return new Promise((resolve,reject) => {
		axiosInstance.get('api/v1/parametro/'  )
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => { 
				reject(error);
			});
	});
};  
const getById = async (id: number): Promise<Parametro> => {
	return new Promise((resolve, reject) => {
		axiosInstance.get('api/v1/parametro/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
const post = async ({
	centro_resultado,
	limite_hora_extra_diario,
	limite_hora_extra_mensal,
	fornecedor_agrupador_id,
	insumo_mao_de_obra_id,
	servico_folha_pagamento_id,
}: Parametro): Promise<Parametro> => {
	return new Promise((resolve, reject) => {
		axiosInstance.post('api/v1/parametro',
			{
				centro_resultado,
				limite_hora_extra_diario,
				limite_hora_extra_mensal,
				fornecedor_agrupador_id,
				insumo_mao_de_obra_id,
				servico_folha_pagamento_id,
			}
		)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

const put = async ({
	id,
	centro_resultado,
	limite_hora_extra_diario,
	limite_hora_extra_mensal,
	fornecedor_agrupador_id,
	insumo_mao_de_obra_id,
	servico_folha_pagamento_id,
}: Parametro): Promise<Parametro> => {
	return new Promise((resolve, reject) => {
		axiosInstance.put('api/v1/parametro/' + id,
			{
				centro_resultado,
				limite_hora_extra_diario,
				limite_hora_extra_mensal,
				fornecedor_agrupador_id,
				insumo_mao_de_obra_id,
				servico_folha_pagamento_id,
			}
		)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

const del = async ({
	id
}: Parametro): Promise<void> => {
	return new Promise((resolve, reject) => {
		axiosInstance.delete('api/v1/parametro/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const ParametroApi = {
	get, del, post, put, getById
};