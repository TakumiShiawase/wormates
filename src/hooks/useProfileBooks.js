import { useState, useEffect, useCallback } from 'react';
import { profileBooks } from '../services/profile';
import { useSelector } from 'react-redux';

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const username = useSelector((state) => state.auth.username);

  const loadBooks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await profileBooks(username);
      setBooks(data);
    } catch (err) {
      setError(err.message || 'Ошибка загрузки книг');
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  return { books, loading, error };
};
