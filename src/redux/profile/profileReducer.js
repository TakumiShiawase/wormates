import { GET_PROFILE_SUCCESS, GET_PROFILE_FAIL } from './profileTypes';

const initialState = {
  user: null,
  profileimg: null,
  banner_image: null,
  books_count: 0,
  series_count: 0,
  about: '',
  followers_count: 0,
  following_count: 0,
  unread_notification_count: 0,
  error: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.payload, // Обновляем состояние всеми данными из payload
        error: null, // Сбрасываем ошибку
      };
    case GET_PROFILE_FAIL:
      return {
        ...state,
        error: action.payload, // Записываем ошибку
      };
    default:
      return state;
  }
};

export default profileReducer;
