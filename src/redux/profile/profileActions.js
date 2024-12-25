import { GET_PROFILE_SUCCESS, GET_PROFILE_FAIL } from './profileTypes';
import { getProfile as fetchProfileFromApi } from '../../services/profile'; // Импортируем функцию из API слоя
import { jwtDecode } from 'jwt-decode'; // Для декодирования токена
import { getAuthToken } from '../../services/api'; // Функция для получения токена
import { logoutUser } from '../auth/authActions'; // Логика выхода пользователя

// Функция для получения профиля
export const getProfile = () => async (dispatch) => {
  const { accessToken } = getAuthToken(); // Получаем access токен из localStorage

  // Проверка на наличие accessToken
  if (!accessToken) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: 'Access token отсутствует. Авторизуйтесь заново.',
    });
    return;
  }

  let username;
  try {
    // Декодируем токен и получаем username
    const decodedToken = jwtDecode(accessToken);

    // Проверка, есть ли в токене username
    if (!decodedToken.username) {
      throw new Error('Username отсутствует в токене');
    }
    username = decodedToken.username;
  } catch (decodeError) {
    // Обработка ошибок декодирования
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: 'Ошибка декодирования токена. Авторизуйтесь заново.',
    });
    logoutUser(); // Удаляем некорректный токен и выходим
    return;
  }

  try {
    // Запрос профиля пользователя по username с помощью API слоя
    const profile = await fetchProfileFromApi(username);
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: profile, // Отправляем данные профиля в Redux
    });
  } catch (error) {
    // Обработка ошибок при запросе профиля
    const errorMessage =
      error.response && error.response.data
        ? error.response.data.detail || 'Ошибка сервера при запросе профиля.'
        : 'Не удалось подключиться к серверу.';

    if (error.response && error.response.status === 401) {
      // Если ошибка 401 (неавторизован), выходим из аккаунта
      logoutUser();
    }

    dispatch({
      type: GET_PROFILE_FAIL,
      payload: errorMessage,
    });
  }
};
