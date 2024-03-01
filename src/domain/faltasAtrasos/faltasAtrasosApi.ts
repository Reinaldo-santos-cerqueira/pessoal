import { axiosInstance } from '../../service/config';
import { FaltasAtrasos } from './types';

const get = async (): Promise<FaltasAtrasos[]> =>{
	return new Promise((resolve,reject) => {
		axiosInstance.get('api/v1/falta')
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => { 
				reject(error);
			});
	});
};  
const getById = async (id: number): Promise<FaltasAtrasos> => {
	return new Promise((resolve, reject) => {
		axiosInstance.get('api/v1/falta/' + id)
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
	data_falta,
	horas
}: FaltasAtrasos): Promise<FaltasAtrasos> => {
	return new Promise((resolve, reject) => {
		console.log('====================================');
		console.log({
			funcionario_id,
			data_falta,
			horas,
		});
		console.log('====================================');
		axiosInstance.post('api/v1/falta',
			{
				funcionario_id,
				data_falta,
				horas,
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
	data_falta,
	horas,
	id
}: FaltasAtrasos): Promise<FaltasAtrasos> => {
	return new Promise((resolve, reject) => {
		axiosInstance.put('api/v1/falta/' + id,
			{
				funcionario_id,
				data_falta,
				horas,
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
}: FaltasAtrasos): Promise<void> => {
	return new Promise((resolve, reject) => {
		axiosInstance.delete('api/v1/falta/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const FaltasAtrasosApi = {
	get, post, put, del, getById
};