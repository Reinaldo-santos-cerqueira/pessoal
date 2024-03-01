import { axiosInstance } from '../../service/config';
import { TipoFolha } from './types';

const get = async (): Promise<TipoFolha[]> =>{
	return new Promise((resolve,reject) => {
		axiosInstance.get('api/v1/tipo_folha')
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => { 
				reject(error);
			});
	});
};  
const getById = async (id: number): Promise<TipoFolha> =>{
	return new Promise((resolve,reject) => {
		axiosInstance.get('api/v1/tipo_folha/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => { 
				reject(error);
			});
	});
};  
const post = async ({
	tipo_folha
}: TipoFolha): Promise<TipoFolha> => {
	return new Promise((resolve, reject) => {
		axiosInstance.post('api/v1/tipo_folha',
			{
				tipo_folha,
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
	tipo_folha,
	id
}: TipoFolha): Promise<TipoFolha> => {
	return new Promise((resolve, reject) => {
		axiosInstance.put('api/v1/tipo_folha/' + id,
			{
				tipo_folha,
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
}: TipoFolha): Promise<void> => {
	return new Promise((resolve, reject) => {
		axiosInstance.delete('api/v1/tipo_folha/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const TipoFolhaApi = {
	get,post,put,del,getById
};