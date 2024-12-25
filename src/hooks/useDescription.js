import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getDescription, updateDescription } from '../services/profile';

export const useDescription = () => {
  const [description, setDescription] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const username = useSelector((state) => state.auth.username);

  const fetchDescription = useCallback(async () => {
    if (!username) {
      setError('Пользователь не авторизован.');
      return;
    }
    try {
      setLoading(true);
      const fetchedDescription = await getDescription(username);
      setDescription(fetchedDescription || null);
    } catch (err) {
      setError('Не удалось загрузить описание.');
    } finally {
      setLoading(false);
    }
  }, [username]);

  const saveDescription = async (newDescription) => {
    if (!username) {
      setError('Пользователь не авторизован.');
      return;
    }
    try {
      setLoading(true);
      await updateDescription(username, newDescription);
      setDescription(newDescription);
    } catch (err) {
      setError('Не удалось сохранить описание.');
    } finally {
      setLoading(false);
    }
  };

  // Автоматически загружать описание при монтировании компонента
  useEffect(() => {
    fetchDescription();
  }, [fetchDescription]);

  return { description, loading, error, setDescription, saveDescription };
};
