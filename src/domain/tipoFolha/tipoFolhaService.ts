import { TipoFolhaApi } from './tipoFolhaApi';
import { TipoFolha } from './types';

const get = async (): Promise<TipoFolha[]> => {
	return new Promise((resolve, reject) => {
		TipoFolhaApi.get()
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const getById = async (id: number): Promise<TipoFolha> => {
	return new Promise((resolve, reject) => {
		TipoFolhaApi.getById(id)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const post = async (tipofolha: TipoFolha): Promise<TipoFolha> => {
	return new Promise((resolve, reject) => {
		TipoFolhaApi.post(tipofolha)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const put = async (tipofolha: TipoFolha): Promise<TipoFolha> => {
	return new Promise((resolve, reject) => {
		TipoFolhaApi.put(tipofolha)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const del = async (tipofolha: TipoFolha): Promise<void> => {
	return new Promise((resolve, reject) => {
		TipoFolhaApi.del(tipofolha)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const TipoFolhaService = {
	get, put, post, del, getById
};