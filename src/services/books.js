import api from './api';

export const fetchBooks = async () => {
  try {
    const response = await api.get('/api');
    return response.data.results;
  } catch (error) {
    throw new Error('Ошибка при загрузке данных');
  }
};

export const fetchBooksHistory = async () => {
  try {
    const response = await api.get(`/api/history/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books history:', error);
    return {};
  }
};

export const fetchBooksNews = async () => {
  try {
    const response = await api.get(`/api/news/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books news:', error);
    return {};
  }
};

export const getBookDetail = async (bookId) => {
  try {
    const response = await api.get(`/api/book_detail/${bookId}/`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении данных книги:', error);
    throw error;
  }
};

export const getRecommendations = async (bookId) => {
  try {
    const response = await api.get(`/api/book_detail/${bookId}/reccomendation/`);
    return response.data; // Возвращаем данные
  } catch (error) {
    console.error('Ошибка при получении рекомендаций:', error);
    throw error; // Выбрасываем ошибку для обработки в хуке
  }
};

export const fetchChapters = async (bookId) => {
  try {
    const response = await api.get(`/api/book/${bookId}/chapter_side/`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при загрузке глав:', error);
    throw error;
  }
};
