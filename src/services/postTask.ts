import axios from 'axios';
import { API_BASE_URL } from '../config';

const API_URL = `${API_BASE_URL}/tasks`;

export const postTask = async (task: any) => {
  try {
    const response = await axios.post(API_URL, task);
    return response.data;
  } catch (error) {
    console.error('Error al crear tarea:', error);
    return null;
  }
}; 