import { JornadaTrabalhoApi } from './jornaldaTrabalhoApi';
import { JornadaTrabalho } from './types';

const get = async (): Promise<JornadaTrabalho[]> => {
	return new Promise((resolve, reject) => {
		JornadaTrabalhoApi.get()
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const post = async (jornadatrabalho: JornadaTrabalho): Promise<JornadaTrabalho> => {
	return new Promise((resolve, reject) => {
		JornadaTrabalhoApi.post(jornadatrabalho)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const put = async (jornadatrabalho: JornadaTrabalho): Promise<JornadaTrabalho> => {
	return new Promise((resolve, reject) => {
		JornadaTrabalhoApi.put(jornadatrabalho)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const del = async (jornadatrabalho: JornadaTrabalho): Promise<void> => {
	return new Promise((resolve, reject) => {
		JornadaTrabalhoApi.del(jornadatrabalho)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const JornadaTrabalhoService = {
	get, post,del,put
};