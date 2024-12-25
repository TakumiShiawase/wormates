export const selectUser = (state) => state.auth.user;
export const selectUsername = (state) => state.auth.username;
export const selectAccessToken = (state) => state.auth.accessToken; // Исправили на accessToken
export const selectRefreshToken = (state) => state.auth.refreshToken; // Добавили селектор для refreshToken
export const selectError = (state) => state.auth.error;
export const isAuthenticated = (state) => {
  return !!state.auth.accessToken; // Проверка наличия accessToken
};
