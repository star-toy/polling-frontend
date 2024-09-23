import axios, { AxiosError } from 'axios';
import { AXIOS_INSTANCE } from '@/api/generated/mutator/custom-instance';

interface ResponseDataType {
  message?: string;
}

const getErrorMessage = (error: AxiosError<ResponseDataType>) => {
  if (error.response) {
    // 서버가 2xx 범위를 벗어나는 상태 코드로 응답한 경우
    return `오류가 발생했습니다. (상태 코드: ${error.response.status})`;
  }

  if (error.request) {
    // 요청은 전송되었으나 응답을 받지 못한 경우
    return '서버로부터 응답을 받지 못했습니다.';
  }

  // 서버 요청 중에 오류가 발생한 경우
  return '서버 요청 중 오류가 발생했습니다.';
};

AXIOS_INSTANCE.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      error.message = getErrorMessage(error);
    } else if (error instanceof Error) {
      error.message = '알 수 없는 오류가 발생했습니다.';
    }
    return Promise.reject(error);
  },
);
