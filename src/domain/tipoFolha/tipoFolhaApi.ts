import { axiosInstance } from '../../service/config';
import { TipoFolha } from './types';

export const getTipoFolha = async (): Promise<TipoFolha[]> =>{
	return new Promise((resolve,reject) => {
		axiosInstance.get('api/v1/tipo_folha')
			.then((response) => {
				console.log('====================================');
				console.log(response.data);
				console.log('====================================');
				resolve(response.data);
			})
			.catch((error) => { 
				reject(error);
			});
	});
};  

export const TipoFolhaApi = {
	getTipoFolha
};