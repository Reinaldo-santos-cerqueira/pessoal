import axios, { AxiosInstance } from 'axios';

const axiosConfig = {
	baseURL: 'http://localhost:3001/',
};

export const axiosInstance: AxiosInstance = axios.create(axiosConfig); 