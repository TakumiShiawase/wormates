import { combineReducers } from 'redux';
import authReducer from './auth/authReducer'; // Редьюсер аутентификации
import profileReducer from './profile/profileReducer'; // Редьюсер профиля
import registerReducer from './register/registerReducer';
import navReducer from './navigation/navReducer';
import genreReducer from './genre/genreReducer';
import userSettingsReducer from './mainpage_settings/authActions.js';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  register: registerReducer,
  nav: navReducer,
  genre: genreReducer,
  userSettings: userSettingsReducer,
});

export default rootReducer;
