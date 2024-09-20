import Axios, { AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from 'axios';
import { API_KEY } from '@/constants/api-key';
import { GetAccessTokenFromCookie } from '@/utils/get-access-token-from-cookie';

export const AXIOS_INSTANCE = Axios.create({
  baseURL: API_KEY,
  timeout: 10000,
});

type AxiosRequester = <T>(
  options: AxiosRequestConfig<T>,
  includeAuth?: boolean,
) => Promise<AxiosResponse<T>>;

export const customInstance: AxiosRequester = async (options, includeAuth) => {
  const headers = { ...options.headers } as AxiosRequestHeaders;

  if (includeAuth) {
    const accessToken = GetAccessTokenFromCookie();

    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`;
    }
  }

  const client = await AXIOS_INSTANCE({ ...options, headers });

  return client;
};
