import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './authTypes';
import { login } from '../../services/api';
import { setAuthToken } from '../../services/api';
import { jwtDecode } from 'jwt-decode';

// Функция для логина
export const loginUser = (email, password) => async (dispatch) => {
  try {
    const data = await login(email, password);
    const { access, refresh } = data;

    if (access && refresh) {
      setAuthToken(access, refresh);

      const decodedAccessToken = jwtDecode(access);
      const username = decodedAccessToken.username;

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          access,
          refresh,
          username,
        },
      });
    } else {
      throw new Error('Токены не получены');
    }
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};

// Функция для логаута
export const logoutUser = () => (dispatch) => {
  setAuthToken(null); // Удаляем токены из заголовков запросов
  dispatch({ type: LOGOUT });
};
