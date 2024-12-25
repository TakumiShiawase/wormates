import { useState, useEffect } from 'react';
import { getRecommendations } from '../services/books';

const useRecommendations = (bookId) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!bookId) return;

    const fetchRecommendations = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getRecommendations(bookId);
        setRecommendations(data);
      } catch (err) {
        setError('Не удалось загрузить рекомендации. Попробуйте позже.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [bookId]);

  return { recommendations, loading, error };
};

export default useRecommendations;
