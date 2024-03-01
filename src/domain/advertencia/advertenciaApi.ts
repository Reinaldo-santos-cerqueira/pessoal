import { axiosInstance } from '../../service/config';
import { Advertencia } from './types';

const get = async (): Promise<Advertencia[]> => {
	return new Promise((resolve,reject) => {
		axiosInstance.get('api/v1/advertencia')
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => { 
				reject(error);
			});
	});
};  
const getById = async (id: number): Promise<Advertencia> => {
	return new Promise((resolve, reject) => {
		axiosInstance.get('api/v1/advertencia/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};  

const post = async ({ funcionario_id, responsavel_id, advertencia, data }: Advertencia): Promise<Advertencia> => {
	return new Promise((resolve, reject) => {
		axiosInstance.post('api/v1/advertencia', {
			funcionario_id, responsavel_id, advertencia, data
		})
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

const put = async ({ responsavel_id, advertencia, data,id }: Advertencia): Promise<Advertencia> => {
	return new Promise((resolve, reject) => {
		axiosInstance.put(`api/v1/advertencia/${id}`, {
			responsavel_id, advertencia, data
		})
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

const del = async ({ id }: Advertencia): Promise<void> => {
	return new Promise((resolve, reject) => {
		axiosInstance.delete(`api/v1/advertencia/${id}`)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const AdvertenciaApi = {
	get, post, put, del, getById
};