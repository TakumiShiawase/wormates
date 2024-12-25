import { useState } from 'react';
import api from '../services/api';
const useDeleteHistory = (apiUrl) => {
  const [isLoading, setIsLoading] = useState(false); // Состояние загрузки
  const [isSuccess, setIsSuccess] = useState(false); // Успех выполнения
  const [error, setError] = useState(null); // Ошибка

  const deleteHistory = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Отправка пустого POST запроса
      await api.post(`/api/history/delete/`, {});
      setIsSuccess(true);
    } catch (err) {
      setError(err.message || 'Ошибка при выполнении запроса.');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isSuccess, error, deleteHistory };
};

export default useDeleteHistory;
