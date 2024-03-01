import { ModeloContratoApi } from './modeloContratoApi';
import { ModeloContrato } from './types';

const get = async (): Promise<ModeloContrato[]> => {
	return new Promise((resolve, reject) => {
		ModeloContratoApi.get()
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const getById = async (id: number): Promise<ModeloContrato> => {
	return new Promise((resolve, reject) => {
		ModeloContratoApi.getById(id)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const post = async (modelocontrato: ModeloContrato): Promise<ModeloContrato> => {
	return new Promise((resolve, reject) => {
		ModeloContratoApi.post(modelocontrato)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const put = async (modelocontrato: ModeloContrato): Promise<ModeloContrato> => {
	return new Promise((resolve, reject) => {
		ModeloContratoApi.put(modelocontrato)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const del = async (modelocontrato: ModeloContrato): Promise<void> => {
	return new Promise((resolve, reject) => {
		ModeloContratoApi.del(modelocontrato)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const ModeloContratoService = {
	get, post, put, del, getById
};