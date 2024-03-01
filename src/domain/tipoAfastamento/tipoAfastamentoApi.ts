import { axiosInstance } from '../../service/config';
import { TipoAfastamento } from './types';

const get = async (): Promise<TipoAfastamento[]> =>{
	return new Promise((resolve,reject) => {
		axiosInstance.get('api/v1/tipo_afastamento')
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => { 
				reject(error);
			});
	});
};  
const getById = async (id: number): Promise<TipoAfastamento> => {
	return new Promise((resolve, reject) => {
		axiosInstance.get('api/v1/tipo_afastamento,' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
const post = async ({
	tipo_afastamento,

}: TipoAfastamento): Promise<TipoAfastamento> => {
	return new Promise((resolve, reject) => {
		axiosInstance.post('api/v1/tipo_afastamento',
			{
				tipo_afastamento,
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
	tipo_afastamento,
	id
}: TipoAfastamento): Promise<TipoAfastamento> => {
	return new Promise((resolve, reject) => {
		axiosInstance.put('api/v1/tipo_afastamento/' + id,
			{
				tipo_afastamento
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
}: TipoAfastamento): Promise<void> => {
	return new Promise((resolve, reject) => {
		axiosInstance.delete('api/v1/tipo_afastamento/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const TipoAfastamentoApi = {
	get, post, del, put, getById
};