import { AfastamentoApi } from './afastamentoApi';
import { Afastamento } from './types';

const get = async (): Promise<Afastamento[]> => {
	return new Promise((resolve, reject) => {
		AfastamentoApi.get()
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const getById = async (id: number): Promise<Afastamento> => {
	return new Promise((resolve, reject) => {
		AfastamentoApi.getById(id)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const post = async (afastamento: Afastamento): Promise<Afastamento> => {
	return new Promise((resolve, reject) => {
		AfastamentoApi.post(afastamento)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const put = async (afastamento: Afastamento): Promise<Afastamento> => {
	return new Promise((resolve, reject) => {
		AfastamentoApi.put(afastamento)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const del = async (afastamento: Afastamento): Promise<void> => {
	return new Promise((resolve, reject) => {
		AfastamentoApi.del(afastamento)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const AfastamentoService = {
	get, post, del, put, getById
};