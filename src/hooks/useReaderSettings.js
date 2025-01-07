import { useState, useEffect } from 'react';
import { fetchSettings } from '../services/reader';

const useReaderSettings = () => {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSettings = async () => {
      try {
        const data = await fetchSettings();
        setSettings(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getSettings();
  }, []);

  return { settings, loading, error };
};

export default useReaderSettings;