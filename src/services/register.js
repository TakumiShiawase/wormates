import api from './api';

export const registerUser = async (data) => {
  try {
    const response = await api.post(`register/`, data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
