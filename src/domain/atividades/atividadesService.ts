import { AtividadeApi } from './atividadesApi';
import { Atividade } from './types';

const get = async (): Promise<Atividade[]> => {
	return new Promise((resolve, reject) => {
		AtividadeApi.get()
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const getById = async (id: number): Promise<Atividade> => {
	return new Promise((resolve, reject) => {
		AtividadeApi.getById(id)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const post = async (atividade: Atividade): Promise<Atividade> => {
	return new Promise((resolve, reject) => {
		AtividadeApi.post(atividade)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const put = async (atividade: Atividade): Promise<Atividade> => {
	return new Promise((resolve, reject) => {
		AtividadeApi.put(atividade)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const del = async (atividade: Atividade): Promise<void> => {
	return new Promise((resolve, reject) => {
		AtividadeApi.del(atividade)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const AtividadeService = {
	get, put, del, post, getById
};