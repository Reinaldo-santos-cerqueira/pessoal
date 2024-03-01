import { axiosInstance } from '../../service/config';
import { Atividade } from './types';

const get = async (): Promise<Atividade[]> =>{
	return new Promise((resolve,reject) => {
		axiosInstance.get('api/v1/atividade')
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => { 
				reject(error);
			});
	});
};  

const getById = async (id: number): Promise<Atividade> => {
	return new Promise((resolve, reject) => {
		axiosInstance.get('api/v1/atividade/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};  


const post = async ({ atividade }:Atividade): Promise<Atividade> => {
	return new Promise((resolve, reject) => {
		axiosInstance.post('api/v1/atividade', { atividade:atividade })
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};  
const put = async ({ atividade,id }: Atividade): Promise<Atividade> => {
	return new Promise((resolve, reject) => {
		axiosInstance.put('api/v1/atividade/' + id, { atividade })
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
const del = async ({ id }: Atividade): Promise<void> => {
	return new Promise((resolve, reject) => {
		axiosInstance.delete('api/v1/atividade/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const AtividadeApi = {
	get, post, del, put, getById
};