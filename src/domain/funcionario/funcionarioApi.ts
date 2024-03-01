import { axiosInstance } from '../../service/config';
import { Funcionario } from './types';

const get = async (): Promise<Funcionario[]> =>{
	return new Promise((resolve,reject) => {
		axiosInstance.get('api/v1/funcionario')
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => { 
				reject(error);
			});
	});
};  

export const FuncionarioApi = {
	get
};