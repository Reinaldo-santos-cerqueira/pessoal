import { axiosInstance } from '../../service/config';
import { Convenio } from './types';

const get = async (): Promise<Convenio[]> => {
	return new Promise((resolve, reject) => {
		axiosInstance.get('api/v1/convenio')
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
const getById = async (id:number): Promise<Convenio> => {
	return new Promise((resolve, reject) => {
		axiosInstance.get('api/v1/convenio/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

const post = async ({
	convenio
}: Convenio): Promise<Convenio> => {
	return new Promise((resolve, reject) => {
		axiosInstance.post('api/v1/convenio',
			{
				convenio,
			}
		)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

const put = async ({
	convenio,
	id
}: Convenio): Promise<Convenio> => {
	return new Promise((resolve, reject) => {
		axiosInstance.put('api/v1/convenio/' + id,
			{
				convenio,
			}
		)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

const del = async ({
	id
}: Convenio): Promise<void> => {
	return new Promise((resolve, reject) => {
		axiosInstance.delete('api/v1/convenio/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const ConvenioApi = {
	get, del, post, put, getById
};