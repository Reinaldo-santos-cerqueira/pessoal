import { TransferenciaCrApi } from './transferenciaCrApi';
import { TransferenciaCr } from './types';

const get = async (id:number): Promise<TransferenciaCr[]> => {
	return new Promise((resolve, reject) => {
		TransferenciaCrApi.get(id)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
const post = async (transferenciacr: TransferenciaCr): Promise<TransferenciaCr> => {
	return new Promise((resolve, reject) => {
		TransferenciaCrApi.post(transferenciacr)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const put = async (transferenciacr: TransferenciaCr): Promise<TransferenciaCr> => {
	return new Promise((resolve, reject) => {
		TransferenciaCrApi.put(transferenciacr)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};

const del = async (transferenciacr: TransferenciaCr): Promise<void> => {
	return new Promise((resolve, reject) => {
		TransferenciaCrApi.del(transferenciacr)
			.then((response) => {
				resolve(response);

			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const TransferenciaCrService = {
	get,post,put,del
};