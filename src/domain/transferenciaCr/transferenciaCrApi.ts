import { axiosInstance } from '../../service/config';
import { TransferenciaCr } from './types';

const get = async (id: number): Promise<TransferenciaCr[]> =>{
	return new Promise((resolve,reject) => {
		axiosInstance.get('api/v1/funcionario_centro_resultado/' + id)
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
	centro_resultado_id,
	data_inicio_trabalho
}: TransferenciaCr): Promise<TransferenciaCr> => {
	return new Promise((resolve, reject) => {
		axiosInstance.post('api/v1/funcionario_centro_resultado',
			{
				funcionario_id,
				centro_resultado_id,
				data_inicio_trabalho,
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
	centro_resultado_id,
	data_inicio_trabalho,
	id
}: TransferenciaCr): Promise<TransferenciaCr> => {
	return new Promise((resolve, reject) => {
		axiosInstance.put('api/v1/funcionario_centro_resultado/' + id,
			{
				funcionario_id,
				centro_resultado_id,
				data_inicio_trabalho,
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
}: TransferenciaCr): Promise<void> => {
	return new Promise((resolve, reject) => {
		axiosInstance.delete('api/v1/funcionario_centro_resultado/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const TransferenciaCrApi = {
	get,post,put,del
};