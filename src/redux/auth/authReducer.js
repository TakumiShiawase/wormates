import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './authTypes';

const initialState = {
  username: null, // Хранение username
  email: null, // Email пользователя
  accessToken: null, // Токен доступа
  refreshToken: null, // Токен обновления
  error: null, // Ошибка при логине
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        accessToken: action.payload.access,
        refreshToken: action.payload.refresh,
        error: null, // Ошибка обнуляется
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        username: null,
        accessToken: null,
        refreshToken: null,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
