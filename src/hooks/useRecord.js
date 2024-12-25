import { useState, useEffect } from 'react';
import api from '../services/api';

const useRecordState = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const recordApiUrl = `/api/history/record/`;

  useEffect(() => {
    const fetchRecordState = async () => {
      try {
        const response = await api.get(recordApiUrl); // Используем axios
        setIsEnabled(response.data.record_history);
      } catch (error) {
        console.error('Ошибка при загрузке состояния:', error);
      }
    };

    fetchRecordState();
  }, [recordApiUrl]);

  const toggleRecordState = async () => {
    const newState = !isEnabled;
    setIsEnabled(newState);

    try {
      await api.post(recordApiUrl, { record_history: newState }); // Используем axios
    } catch (error) {
      console.error('Ошибка при обновлении состояния:', error);
    }
  };

  return [isEnabled, toggleRecordState];
};

export default useRecordState;
