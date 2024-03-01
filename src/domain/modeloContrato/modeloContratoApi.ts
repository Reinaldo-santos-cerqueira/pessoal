import { axiosInstance } from '../../service/config';
import { ModeloContrato } from './types';

const get = async (): Promise<ModeloContrato[]> =>{
	return new Promise((resolve,reject) => {
		axiosInstance.get('api/v1/modelo_contrato')
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => { 
				reject(error);
			});
	});
};  
const getById = async (id: number): Promise<ModeloContrato> =>{
	return new Promise((resolve,reject) => {
		axiosInstance.get('api/v1/modelo_contrato/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => { 
				reject(error);
			});
	});
};  
const post = async ({
	cargo_id,
	numero_modelo,
	modelo
}: ModeloContrato): Promise<ModeloContrato> => {
	return new Promise((resolve, reject) => {
		axiosInstance.post('api/v1/modelo_contrato',
			{
				numero_modelo,
				modelo,
				cargo_id
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
	numero_modelo,
	modelo,
	cargo_id
}: ModeloContrato): Promise<ModeloContrato> => {
	return new Promise((resolve, reject) => {
		axiosInstance.put('api/v1/modelo_contrato/' + id,
			{
				numero_modelo,
				modelo,
				cargo_id
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
}: ModeloContrato): Promise<void> => {
	return new Promise((resolve, reject) => {
		axiosInstance.delete('api/v1/modelo_contrato/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const ModeloContratoApi = {
	get, del, post, put, getById
};