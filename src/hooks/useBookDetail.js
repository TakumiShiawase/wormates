import { useState, useEffect } from 'react';
import { getBookDetail } from '../services/books';

export const useBookDetail = (bookId) => {
  const [bookDetail, setBookDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetail = async () => {
      if (!bookId) {
        setError('ID книги не указан.');
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const data = await getBookDetail(bookId);
        setBookDetail(data);
      } catch (err) {
        setError('Не удалось загрузить данные книги.');
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetail();
  }, [bookId]);

  return { bookDetail, loading, error };
};
