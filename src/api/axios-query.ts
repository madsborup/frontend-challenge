import axios from 'axios';
import { SERVER_URL } from './constants';

export const readQuery = async <T>(path: string) => {
  try {
    const response = await axios.get<T>(`${SERVER_URL}${path}`);

    return response.data;
  } catch (e) {
    console.log(e);
  }
};
