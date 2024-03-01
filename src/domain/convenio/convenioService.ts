import { ConvenioApi } from './convenioApi';
import { Convenio } from './types';

const get = async (): Promise<Convenio[]> => {
	return new Promise((resolve, reject) => {
		ConvenioApi.get()
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const getById = async (id: number): Promise<Convenio> => {
	return new Promise((resolve, reject) => {
		ConvenioApi.getById(id)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const post = async (convenio: Convenio): Promise<Convenio> => {
	return new Promise((resolve, reject) => {
		ConvenioApi.post(convenio)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const put = async (convenio: Convenio): Promise<Convenio> => {
	return new Promise((resolve, reject) => {
		ConvenioApi.put(convenio)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const del = async (convenio: Convenio): Promise<void> => {
	return new Promise((resolve, reject) => {
		ConvenioApi.del(convenio)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const ConvenioService = {
	get, post, put, del, getById
};