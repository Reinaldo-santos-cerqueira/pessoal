import { axiosInstance } from '../../service/config';
import { JornadaTrabalho } from './types';

const get = async (): Promise<JornadaTrabalho[]> => {
	return new Promise((resolve,reject) => {
		axiosInstance.get('api/v1/jornada_trabalho')
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => { 
				reject(error);
			});
	});
};  

const post = async ({ 
	jornada_trabalho,
	carga_diaria,
	unidade_tempo,
	carga_semanal,
	turnos,
}: JornadaTrabalho): Promise<JornadaTrabalho> => {
	return new Promise((resolve, reject) => {
		axiosInstance.post('api/v1/jornada_trabalho',
			{
				jornada_trabalho,
				carga_diaria,
				unidade_tempo,
				carga_semanal,
				turnos,
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
	jornada_trabalho,
	carga_diaria,
	unidade_tempo,
	carga_semanal,
	turnos,
	id
}: JornadaTrabalho): Promise<JornadaTrabalho> => {
	return new Promise((resolve, reject) => {
		axiosInstance.put('api/v1/jornada_trabalho/' + id,
			{
				jornada_trabalho,
				carga_diaria,
				unidade_tempo,
				carga_semanal,
				turnos,
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
}: JornadaTrabalho): Promise<void> => {
	return new Promise((resolve, reject) => {
		axiosInstance.delete('api/v1/jornada_trabalho/' + id)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};  



export const JornadaTrabalhoApi = {
	get, post, put,del
};