import { useState, useEffect } from 'react';
import { fetchChapters } from '../services/books';

const useFetchChapters = (bookId) => {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadChapters = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchChapters(bookId);
        setChapters(data);
      } catch (err) {
        setError('Ошибка при загрузке данных');
      } finally {
        setLoading(false);
      }
    };

    if (bookId) {
      loadChapters();
    }
  }, [bookId]);

  return { chapters, loading, error };
};

export default useFetchChapters;
