import Axios, { AxiosRequestConfig } from 'axios';
import { API_KEY } from '@/constants/api-key';

export const AXIOS_INSTANCE = Axios.create({
  baseURL: API_KEY,
  timeout: 10000,
});

export const customInstance = async (options: AxiosRequestConfig) => {
  const client = AXIOS_INSTANCE({ ...options });

  await client;
  return client;
};
