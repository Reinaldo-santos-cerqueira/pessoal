import { TipoAfastamentoApi } from './tipoAfastamentoApi';
import { TipoAfastamento } from './types';

const get = async (): Promise<TipoAfastamento[]> => {
	return new Promise((resolve, reject) => {
		TipoAfastamentoApi.get()
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const getById = async (id: number): Promise<TipoAfastamento> => {
	return new Promise((resolve, reject) => {
		TipoAfastamentoApi.getById(id)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const post = async (tipoafastamento: TipoAfastamento): Promise<TipoAfastamento> => {
	return new Promise((resolve, reject) => {
		TipoAfastamentoApi.post(tipoafastamento)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const put = async (tipoafastamento: TipoAfastamento): Promise<TipoAfastamento> => {
	return new Promise((resolve, reject) => {
		TipoAfastamentoApi.put(tipoafastamento)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const del = async (tipoafastamento: TipoAfastamento): Promise<void> => {
	return new Promise((resolve, reject) => {
		TipoAfastamentoApi.del(tipoafastamento)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const TipoAfastamentoService = {
	get, post, del, put, getById
};