import axios, { AxiosRequestConfig } from 'axios';
import { SERVER_URL } from './constants';

//generic function - define response object type
export const readQuery = async <T>(path: string) => {
  try {
    const response = await axios.get<T>(`${SERVER_URL}${path}`);

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const writeQuery = async (path: string, data: Object) => {
  try {
    const response = await axios.post(`${SERVER_URL}${path}`, data);

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
