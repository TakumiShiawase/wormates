import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { profileComments } from '../services/profile';

export const useProfileComments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const username = useSelector((state) => state.auth.username);

  useEffect(() => {
    const loadComments = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await profileComments(username);
        setComments(data);
      } catch (err) {
        setError(err.message || 'Ошибка загрузки комментариев');
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      loadComments();
    }
  }, [username]);

  return { comments, loading, error };
};
