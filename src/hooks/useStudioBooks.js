import { useState, useEffect } from 'react';
import { studioDataBooks, studioDeleteBook } from '../services/studio';

const useStudioBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Загрузка данных
  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await studioDataBooks();
        setBooks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  // Удаление книги
  const bookDelete = async (bookId) => {
    try {
      await studioDeleteBook(bookId); // Удаляем книгу на бэкенде
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId)); // Удаляем книгу из состояния
    } catch (err) {
      setError(err.message);
    }
  };

  return { books, loading, error, bookDelete };
};

export default useStudioBooks;
