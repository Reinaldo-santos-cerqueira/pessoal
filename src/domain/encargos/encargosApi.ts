import { axiosInstance } from '../../service/config';
import { Encargo } from './types';

const get = async (): Promise<Encargo[]> =>{
	return new Promise((resolve,reject) => {
		axiosInstance.get('api/v1/encargo')
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => { 
				reject(error);
			});
	});
};  
const getById = async (id: number): Promise<Encargo> => {
	return new Promise((resolve, reject) => {
		axiosInstance.get('api/v1/encargo/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};  

const post = async ({
	encargo
}: Encargo): Promise<Encargo> => {
	return new Promise((resolve, reject) => {
		axiosInstance.post('api/v1/encargo',
			{
				encargo,
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
	encargo,
	id
}: Encargo): Promise<Encargo> => {
	return new Promise((resolve, reject) => {
		axiosInstance.put('api/v1/encargo/' + id,
			{
				encargo,
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
}: Encargo): Promise<void> => {
	return new Promise((resolve, reject) => {
		axiosInstance.delete('api/v1/encargo/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const EncargoApi = {
	get,del,put,post,getById
};