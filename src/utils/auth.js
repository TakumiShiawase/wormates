import { jwtDecode } from 'jwt-decode';

export const storeAuthToken = (token) => {
  localStorage.setItem('token', token); // Сохраняем токен в localStorage
};

export const removeAuthToken = () => {
  localStorage.removeItem('token'); // Удаляем токен из localStorage
};

export const getAuthToken = () => {
  return localStorage.getItem('token'); // Получаем токен из localStorage
};

export const getRefreshToken = () => {
  return localStorage.getItem('refreshToken'); // Получаем refreshToken из localStorage
};

export const decodeToken = (token) => {
  try {
    return jwtDecode(token); // Декодируем токен
  } catch (error) {
    return null;
  }
};

export const isAuthenticated = () => {
  const token = getAuthToken();
  return token && decodeToken(token); // Проверяем, есть ли токен и валиден ли он
};

export const getUsernameFromToken = () => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    try {
      const decodedToken = jwtDecode(token); // Декодируем токен
      return decodedToken.username; // Извлекаем username из токена
    } catch (error) {
      console.error('Ошибка декодирования токена', error);
      return null;
    }
  }
  return null;
};
