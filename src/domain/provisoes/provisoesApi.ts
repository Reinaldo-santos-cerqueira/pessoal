import { axiosInstance } from '../../service/config';
import { Provisoes } from './types';

const get = async (): Promise<Provisoes[]> =>{
	return new Promise((resolve,reject) => {
		axiosInstance.get('api/v1/provisao')
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => { 
				reject(error);
			});
	});
};  
const getById = async (id: number): Promise<Provisoes> => {
	return new Promise((resolve, reject) => {
		axiosInstance.get('api/v1/provisao/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
const post = async ({
	provisao
}: Provisoes): Promise<Provisoes> => {
	return new Promise((resolve, reject) => {
		axiosInstance.post('api/v1/provisao',
			{
				provisao,
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
	provisao,
	id
}: Provisoes): Promise<Provisoes> => {
	return new Promise((resolve, reject) => {
		axiosInstance.put('api/v1/provisao/' + id,
			{
				provisao,
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
}: Provisoes): Promise<void> => {
	return new Promise((resolve, reject) => {
		axiosInstance.delete('api/v1/provisao/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const ProvisoesApi = {
	get, put, del, post, getById
};