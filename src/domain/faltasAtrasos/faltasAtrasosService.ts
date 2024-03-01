import { FaltasAtrasosApi } from './faltasAtrasosApi';
import { FaltasAtrasos } from './types';

const get = async (): Promise<FaltasAtrasos[]> => {
	return new Promise((resolve, reject) => {
		FaltasAtrasosApi.get()
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const getById = async (id: number): Promise<FaltasAtrasos> => {
	return new Promise((resolve, reject) => {
		FaltasAtrasosApi.getById(id)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const post = async (faltasatrasos: FaltasAtrasos): Promise<FaltasAtrasos> => {
	return new Promise((resolve, reject) => {
		FaltasAtrasosApi.post(faltasatrasos)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const put = async (faltasatrasos: FaltasAtrasos): Promise<FaltasAtrasos> => {
	return new Promise((resolve, reject) => {
		FaltasAtrasosApi.put(faltasatrasos)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const del = async (faltasatrasos: FaltasAtrasos): Promise<void> => {
	return new Promise((resolve, reject) => {
		FaltasAtrasosApi.del(faltasatrasos)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const FaltasAtrasosService = {
	get, put, del, post, getById
};