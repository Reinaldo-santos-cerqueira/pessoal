import { EncargoApi } from './encargosApi';
import { Encargo } from './types';

const get = async (): Promise<Encargo[]> => {
	return new Promise((resolve, reject) => {
		EncargoApi.get()
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const getById = async (id: number): Promise<Encargo> => {
	return new Promise((resolve, reject) => {
		EncargoApi.getById(id)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const post = async (encargo: Encargo): Promise<Encargo> => {
	return new Promise((resolve, reject) => {
		EncargoApi.post(encargo)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const put = async (encargo: Encargo): Promise<Encargo> => {
	return new Promise((resolve, reject) => {
		EncargoApi.put(encargo)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const del = async (encargo: Encargo): Promise<void> => {
	return new Promise((resolve, reject) => {
		EncargoApi.del(encargo)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const EncargoService = {
	get, post, del, put, getById
};