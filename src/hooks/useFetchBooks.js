import { useState, useEffect } from 'react';
import { fetchBooks } from '../services/books'; // Импорт вашей функции API

const useFetchBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        setLoading(true);
        const data = await fetchBooks(); // Вызов вашей функции API
        setBooks(data);
      } catch (err) {
        setError(err.message || 'Не удалось загрузить книги');
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  return { books, loading, error };
};

export default useFetchBooks;
