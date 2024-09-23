import axios, { AxiosRequestConfig } from 'axios';
import { BASE_API_KEY } from '@/constants/api-key';

export const AXIOS_INSTANCE = axios.create({
  baseURL: BASE_API_KEY,
  timeout: 10000,
});

export const CustomInstance = async <T>(options: AxiosRequestConfig): Promise<T> => {
  const client = await AXIOS_INSTANCE(options);
  return client.data;
};
