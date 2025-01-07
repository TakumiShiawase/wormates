import api from './api';

export const fetchSettings = async () => {
  const response = await api.get('/users/api/settings/reader_settings/');
  return response.data;
};

export const updateSettings = async (settings) => {
  const response = await api.put('/users/api/settings/reader_settings/', settings);
  return response.data;
};
