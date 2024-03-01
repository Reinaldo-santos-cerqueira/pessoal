import { axiosInstance } from '../../service/config';
import { HorasExtras } from './types';

const get = async (): Promise<HorasExtras[]> =>{
	return new Promise((resolve,reject) => {
		axiosInstance.get('api/v1/solicitacao_hora_extra')
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => { 
				reject(error);
			});
	});
};  
const getById = async (id: number): Promise<HorasExtras> => {
	return new Promise((resolve, reject) => {
		axiosInstance.get('api/v1/solicitacao_hora_extra/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
const post = async ({
	funcionario_id,
	solicitante_id,
	data_solicitacao,
	data_extra,
	horas_extras,
	observacao,
	autorizado_por,
	data_autorizacao,
	status_solicitacao_id
}: HorasExtras): Promise<HorasExtras> => {
	return new Promise((resolve, reject) => {
		axiosInstance.post('api/v1/solicitacao_hora_extra',
			{
				funcionario_id,
				solicitante_id,
				data_solicitacao,
				data_extra,
				horas_extras,
				observacao,
				autorizado_por,
				data_autorizacao,
				status_solicitacao_id
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
	funcionario_id,
	solicitante_id,
	data_solicitacao,
	data_extra,
	horas_extras,
	observacao,
	autorizado_por,
	data_autorizacao,
	status_solicitacao_id,
	id
}: HorasExtras): Promise<HorasExtras> => {
	return new Promise((resolve, reject) => {
		axiosInstance.put('api/v1/hora_extra/' + id,
			{
				funcionario_id,
				solicitante_id,
				data_solicitacao,
				data_extra,
				horas_extras,
				observacao,
				autorizado_por,
				data_autorizacao,
				status_solicitacao_id
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
}: HorasExtras): Promise<void> => {
	return new Promise((resolve, reject) => {
		axiosInstance.delete('api/v1/hora_extra/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const HorasExtrasApi = {
	get,put,post,del,getById
};