import api from './api';
import { useNavigate } from 'react-router-dom';

export const studioHomeButtonsPost = (book_type) => {
  const data = {
    book_type: book_type,
  };

  api
    .post(`/api/studio/welcome/`, data)
    .then((response) => {
      const navigate = useNavigate();
      console.log(response.data);
      navigate(`/studio/${response.data.book_id}/chapter/${response.data.first_chapter_id}`);
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
};

export const uploadFile = async (event) => {
  const file = event.target.files[0];
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await api.post('/api/studio/books/upload/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      // Сервер ответил с кодом состояния, который выходит за пределы 2xx
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    } else if (error.request) {
      // Запрос был сделан, но ответа не было
      console.error('Request data:', error.request);
    } else {
      // Произошло что-то при настройке запроса, вызвавшее ошибку
      console.error('Error message:', error.message);
    }
    console.error('There was an error uploading the file!', error);
  }
};
export const studioDataBooks = async () => {
  try {
    const response = await api.get('/api/studio/books/');
    return response.data;
  } catch (error) {
    throw new Error('Ошибка при загрузке данных');
  }
};

// Удаление книги (пример)
export const studioDeleteBook = async (bookId) => {
  try {
    await api.delete(`/api/studio/books/${bookId}/delete/`);
    return bookId; // Возвращаем ID удаленной книги
  } catch (error) {
    throw new Error('Ошибка при удалении книги');
  }
};
