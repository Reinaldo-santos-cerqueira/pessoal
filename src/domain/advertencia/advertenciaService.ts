import { formatDate } from '../../utils/formatData';
import { AdvertenciaApi } from './advertenciaApi';
import { Advertencia } from './types';

const get = async (): Promise<Advertencia[]> => {
	return new Promise((resolve, reject) => {
		AdvertenciaApi.get()
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const getById = async (id:number): Promise<Advertencia> => {
	return new Promise((resolve, reject) => {
		AdvertenciaApi.getById(id)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const post = async (advertencia: Advertencia): Promise<Advertencia> => {
	const dateFormat = formatDate(advertencia.data);
	console.log('====================================');
	console.log({ ...advertencia, data: dateFormat });
	console.log('====================================');
	return new Promise((resolve, reject) => {
		AdvertenciaApi.post({ ...advertencia, data: dateFormat })
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const put = async (advertencia: Advertencia): Promise<Advertencia> => {
	const dateFormat = formatDate(advertencia.data);

	return new Promise((resolve, reject) => {
		AdvertenciaApi.put({ ...advertencia, data: dateFormat })
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const del = async (advertencia: Advertencia): Promise<void> => {
	return new Promise((resolve, reject) => {
		AdvertenciaApi.del(advertencia)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const AdvertenciaService = {
	get, post, put, del, getById
};