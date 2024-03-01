import { axiosInstance } from '../../service/config';
import { Afastamento } from './types';

const get = async (): Promise<Afastamento[]> =>{
	return new Promise((resolve,reject) => {
		axiosInstance.get('api/v1/afastamento')
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => { 
				reject(error);
			});
	});
};  
const getById = async (id: number): Promise<Afastamento> => {
	return new Promise((resolve, reject) => {
		axiosInstance.get('api/v1/afastamento/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
const post = async ({
	data_afastamento,
	data_retorno,
	motivo_afastamento,
	funcionario_id,
	tipo_afastamento_id
}: Afastamento): Promise<Afastamento> => {
	return new Promise((resolve, reject) => {
		axiosInstance.post('api/v1/afastamento',
			{
				data_afastamento,
				data_retorno,
				motivo_afastamento,
				funcionario_id,
				tipo_afastamento_id
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
	data_afastamento,
	data_retorno,
	motivo_afastamento,
	funcionario_id,
	tipo_afastamento_id,
	id
}: Afastamento): Promise<Afastamento> => {
	return new Promise((resolve, reject) => {
		axiosInstance.put('api/v1/afastamento/' + id,
			{
				data_afastamento,
				data_retorno,
				motivo_afastamento,
				funcionario_id,
				tipo_afastamento_id
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
}: Afastamento): Promise<void> => {
	return new Promise((resolve, reject) => {
		axiosInstance.delete('api/v1/afastamento/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const AfastamentoApi = {
	get, post, del, put, getById
};