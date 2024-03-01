import { axiosInstance } from '../../service/config';
import { Cargo } from './types';

const get = async (): Promise<Cargo[]> => {
	return new Promise((resolve,reject) => {
		axiosInstance.get('api/v1/cargo')
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => { 
				reject(error);
			});
	});
};  
const getById = async (id: number): Promise<Cargo> => {
	return new Promise((resolve, reject) => {
		axiosInstance.get('api/v1/cargo/' + id)
			.then((response) => {
				resolve(response.data.cargo);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
const post = async ({ 
	cargo,
	remuneracao,
	comissao_direta,
	comissao_indireta,
	jornada_trabalho_id
}: Cargo): Promise<Cargo> => {
	return new Promise((resolve, reject) => {
		axiosInstance.post('api/v1/cargo',
			{
				cargo,
				remuneracao,
				comissao_direta,
				comissao_indireta,
				jornada_trabalho_id
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
	cargo,
	remuneracao,
	comissao_direta,
	comissao_indireta,
	jornada_trabalho_id,
	id
}: Cargo): Promise<Cargo> => {
	return new Promise((resolve, reject) => {
		axiosInstance.put('api/v1/cargo/' + id,
			{
				cargo,
				remuneracao,
				comissao_direta,
				comissao_indireta,
				jornada_trabalho_id
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
}: Cargo): Promise<void> => {
	return new Promise((resolve, reject) => {
		axiosInstance.delete('api/v1/cargo/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};  



export const CargoApi = {
	get, post, put, del, getById
};