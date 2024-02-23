import { TipoFolhaApi } from './tipoFolhaApi';
import { TipoFolha } from './types';

export const getTipoFolha = async (): Promise<TipoFolha[]> => {
	return new Promise((resolve) => {
		const tipoFolha = TipoFolhaApi.getTipoFolha();
		resolve(tipoFolha);
	});
};

export const TipoFolhaService = {
	getTipoFolha
};