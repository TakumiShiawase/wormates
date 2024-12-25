import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { fetchLibrary } from '../services/profile';

export const useLibrary = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const username = useSelector((state) => state.auth.username);
  const [filter, setFilter] = useState(''); // Состояние для текущего фильтра

  const loadBooks = useCallback(
    async (currentFilter) => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchLibrary(username, currentFilter);
        setBooks(data);
      } catch (err) {
        setError(err.message || 'Ошибка загрузки библиотеки');
      } finally {
        setLoading(false);
      }
    },
    [username], // Мемоизируем функцию на основе username
  );

  useEffect(() => {
    loadBooks(filter); // Загружаем книги при изменении фильтра
  }, [filter, loadBooks]); // Зависимости: filter и loadBooks

  return { books, loading, error, filter, setFilter }; // Возвращаем filter
};
