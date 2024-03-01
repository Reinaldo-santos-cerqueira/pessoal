import { ProvisoesApi } from './provisoesApi';
import { Provisoes } from './types';

const get = async (): Promise<Provisoes[]> => {
	return new Promise((resolve, reject) => {
		ProvisoesApi.get()
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const getById = async (id: number): Promise<Provisoes> => {
	return new Promise((resolve, reject) => {
		ProvisoesApi.getById(id)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const post = async (provisao: Provisoes): Promise<Provisoes> => {
	return new Promise((resolve, reject) => {
		ProvisoesApi.post(provisao)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const put = async (provisao: Provisoes): Promise<Provisoes> => {
	return new Promise((resolve, reject) => {
		ProvisoesApi.put(provisao)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const del = async (provisao: Provisoes): Promise<void> => {
	return new Promise((resolve, reject) => {
		ProvisoesApi.del(provisao)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const ProvisoesService = {
	get, getById, post, put, del
};