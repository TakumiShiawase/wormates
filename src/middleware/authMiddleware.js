import { LOGIN_SUCCESS, LOGOUT } from '../redux/auth/authTypes';
import { setAuthToken } from '../services/api';
import api from '../services/api';
import { jwtDecode } from 'jwt-decode';

// Функция для обновления токенов
const refreshAccessToken = async (dispatch) => {
  const refreshToken = localStorage.getItem('refresh_token');
  if (refreshToken) {
    try {
      const response = await api.post('users/api/token/refresh/', { refresh: refreshToken });
      const { access, refresh } = response.data;
      setAuthToken(access, refresh);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          access,
          refresh,
          username: jwtDecode(access).username,
        },
      });
    } catch (error) {
      console.error('Failed to refresh token:', error);
      dispatch({ type: LOGOUT });
    }
  } else {
    dispatch({ type: LOGOUT });
  }
};

// Middleware для обработки токенов
const authMiddleware = (store) => (next) => (action) => {
  // Если получен action с LOGIN_SUCCESS, сохраняем токены в localStorage
  if (action.type === LOGIN_SUCCESS) {
    const { access, refresh } = action.payload;
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);
    setAuthToken(access, refresh);
  }

  // Если получен action с LOGOUT, удаляем токены
  if (action.type === LOGOUT) {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setAuthToken(null); // Убираем токены из заголовков запросов
  }

  // Если ответ с кодом 401, пытаемся обновить токен
  if (action.type === 'API_ERROR' && action.payload?.status === 401) {
    refreshAccessToken(store.dispatch);
  }

  return next(action);
};

export default authMiddleware;
