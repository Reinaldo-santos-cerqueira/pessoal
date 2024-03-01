import { FuncionarioApi } from './funcionarioApi';
import { Funcionario } from './types';

const get = async (): Promise<Funcionario[]> => {
	return new Promise((resolve, reject) => {
		FuncionarioApi.get()
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const FuncionarioService = {
	get
};