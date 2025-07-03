import axios from 'axios';
import { API_BASE_URL } from '../config';

const API_URL = `${API_BASE_URL}/categories`;

export const getCategories = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data || [];
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    return [];
  }
}; 