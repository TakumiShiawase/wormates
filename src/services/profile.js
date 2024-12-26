import api from './api'; // Импорт вашего axios экземпляра или другого API клиента

// Получение профиля пользователя
export const getProfile = async (username) => {
  try {
    const response = await api.get(`/users/api/${username}/`); // Эндпоинт для получения профиля
    return response.data; // Возвращаем данные профиля
  } catch (error) {
    throw new Error('Ошибка при получении профиля');
  }
};

// Обновление профиля пользователя
export const updateProfile = async (username, userData) => {
  try {
    const response = await api.put(`users/api/profile/${username}/`, userData); // Эндпоинт для обновления профиля
    return response.data; // Возвращаем обновленные данные
  } catch (error) {
    throw new Error('Ошибка при обновлении профиля');
  }
};
export const getFollowers = async (username) => {
  try {
    const response = await api.get(`/users/api/${username}/following/`);
    const followersData = response.data || []; // Если данные пустые, передаем пустой массив
    return followersData.slice(0, 5); // Теперь мы уверены, что followersData - это массив
  } catch (error) {
    console.error('Ошибка при получении фолловеров:', error);
    throw error; // Выбрасываем ошибку, если она возникла
  }
};

export const fetchLibrary = async (username, filter) => {
  try {
    const filterQuery = filter ? `?filter_by=${filter}` : '';
    const response = await api.get(`/users/api/${username}/library${filterQuery}`);
    return response.data; // Предполагаем, что данные книги находятся в response.data
  } catch (error) {
    console.error('Ошибка при запросе данных:', error);
    throw error;
  }
};

export const profileBooks = async (username) => {
  try {
    const response = await api.get(`/users/api/${username}/books/`);
    return response.data; // Возвращаем данные о книгах
  } catch (error) {
    throw new Error('Не удалось загрузить книги.');
  }
};

export const profileComments = async (username) => {
  try {
    const response = await api.get(`/users/api/${username}/comments/`);
    return Array.isArray(response.data.comments) ? response.data.comments : [];
  } catch (error) {
    throw new Error(error.response ? error.response.data : 'Ошибка запроса');
  }
};
export const getDescription = async (username) => {
  const response = await api.get(`/users/api/${username}/description/`);
  return response.data.description;
};

export const updateDescription = async (username, description) => {
  await api.put(`/users/api/${username}/description/`, { description });
};

export const fetchMainpageSettings = async () => {
  try {
    const response = await api.get('/users/api/settings/mainpage/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Добавляем токен
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user settings:', error);
    throw error;
  }
};

export const updateMainpageSettings = async (settings) => {
  try {
    const response = await api.patch('/users/api/settings/mainpage/', settings, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating user settings:', error);
    throw error;
  }
};
