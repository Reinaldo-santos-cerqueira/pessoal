import { HorasExtrasApi } from './horasExtrasApi';
import { HorasExtras } from './types';

const get = async (): Promise<HorasExtras[]> => {
	return new Promise((resolve, reject) => {
		HorasExtrasApi.get()
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const getById = async (id: number): Promise<HorasExtras> => {
	return new Promise((resolve, reject) => {
		HorasExtrasApi.getById(id)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const post = async (horasextras: HorasExtras): Promise<HorasExtras> => {
	return new Promise((resolve, reject) => {
		HorasExtrasApi.post(horasextras)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const put = async (horasextras: HorasExtras): Promise<HorasExtras> => {
	return new Promise((resolve, reject) => {
		HorasExtrasApi.put(horasextras)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const del = async (horasextras: HorasExtras): Promise<void> => {
	return new Promise((resolve, reject) => {
		HorasExtrasApi.del(horasextras)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const HorasExtrasService = {
	get, post, del, put, getById
};