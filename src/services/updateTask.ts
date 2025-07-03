import axios from 'axios';
import { API_BASE_URL } from '../config';

const API_URL = `${API_BASE_URL}/tasks`;

export const updateTask = async (id: string, task: any) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, task);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar tarea:', error);
    return null;
  }
}; 