import { ParametroApi } from './parametroApi';
import { Parametro } from './types';

const get = async (): Promise<Parametro[]> => {
	return new Promise((resolve, reject) => {
		ParametroApi.get()
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const getById = async (id: number): Promise<Parametro> => {
	return new Promise((resolve, reject) => {
		ParametroApi.getById(id)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const post = async (parametro: Parametro): Promise<Parametro> => {
	return new Promise((resolve, reject) => {
		ParametroApi.post(parametro)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const put = async (parametro: Parametro): Promise<Parametro> => {
	return new Promise((resolve, reject) => {
		ParametroApi.put(parametro)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const del = async (parametro: Parametro): Promise<void> => {
	return new Promise((resolve, reject) => {
		ParametroApi.del(parametro)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const ParametroService = {
	get, post, put, del, getById
};