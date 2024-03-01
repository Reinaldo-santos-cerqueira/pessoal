import { CargoApi } from './cargosApi';
import { Cargo } from './types';

const get = async (): Promise<Cargo[]> => {
	return new Promise((resolve, reject) => {
		CargoApi.get()
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const getById = async (id: number): Promise<Cargo> => {
	return new Promise((resolve, reject) => {
		CargoApi.getById(id)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const post = async (cargo: Cargo): Promise<Cargo> => {
	return new Promise((resolve, reject) => {
		CargoApi.post(cargo)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const put = async (cargo: Cargo): Promise<Cargo> => {
	return new Promise((resolve, reject) => {
		CargoApi.put(cargo)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const del = async (cargo: Cargo): Promise<void> => {
	return new Promise((resolve, reject) => {
		CargoApi.del(cargo)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const CargoService = {
	get, post, del, put, getById
};