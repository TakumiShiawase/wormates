import axios from 'axios';

const API_URL = 'https://wormates.com/';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Функция для отправки логина
export const login = async (email, password) => {
  const response = await api.post('users/api/login/', { email, password });
  return response.data;
};

// Функция для установки токенов в localStorage и заголовки
export const setAuthToken = (accessToken, refreshToken = null) => {
  if (accessToken) {
    localStorage.setItem('access_token', accessToken);
    api.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  if (refreshToken) {
    localStorage.setItem('refresh_token', refreshToken);
  }

  if (!accessToken && !refreshToken) {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    delete api.defaults.headers['Authorization'];
  }
};

// Функция для получения токенов из localStorage
export const getAuthToken = () => {
  const accessToken = localStorage.getItem('access_token');
  const refreshToken = localStorage.getItem('refresh_token');
  return { accessToken, refreshToken };
};

// Функция обновления accessToken с использованием refreshToken
export const refreshAccessToken = async () => {
  const { refreshToken } = getAuthToken();

  if (!refreshToken) {
    throw new Error('Refresh token not available');
  }

  try {
    const response = await api.post('users/api/token/refresh/', { refresh: refreshToken });
    const newAccessToken = response.data.access; // Новый access токен

    setAuthToken(newAccessToken); // Обновляем только access токен
    return newAccessToken;
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw new Error('Unable to refresh token');
  }
};
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
// Перехватчик для автоматического обновления токена
api.interceptors.response.use(
  (response) => response, // Если ответ успешный, просто возвращаем его
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Предотвращаем повторный запуск

      try {
        const newAccessToken = await refreshAccessToken();
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return api(originalRequest); // Повторяем запрос с новым токеном
      } catch (refreshError) {
        console.error('Failed to refresh token:', refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error); // Если это не 401 ошибка, возвращаем её как есть
  },
);

export default api;
