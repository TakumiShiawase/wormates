import { useState, useEffect } from 'react';
import api from '../services/api';

// Хук для работы с переключателями
const useLibraryUpdates = () => {
  const [librarySettings, setLibrarySettings] = useState({
    chapter_notification_threshold: 0,
    group_by_author: false,
    show_author_updates: false,
    newbooks: false,
    library_reading_updates: false,
    library_wishlist_updates: false,
    library_liked_updates: false,
    library_favourite_updates: false,
    show_review_updates: false,
    show_comment_updates: false,
    show_follower_updates: false,
    show_response_updates: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  const apiUrl = '/users/api/settings/notifications/';

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get(apiUrl);
        if (response.status === 200) {
          setLibrarySettings(response.data);
        } else {
          throw new Error('Ошибка при получении данных');
        }
      } catch (error) {
        console.error('Ошибка при получении настроек:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const updateSettings = async (updatedSettings) => {
    try {
      const response = await api.put(apiUrl, updatedSettings, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setLibrarySettings(response.data);
      } else {
        throw new Error('Ошибка при отправке данных');
      }
    } catch (error) {
      console.error('Ошибка обновления настроек:', error);
    }
  };

  const toggleSetting = (setting) => {
    const updatedSettings = {
      ...librarySettings,
      [setting]: !librarySettings[setting],
    };
    updateSettings(updatedSettings);
  };

  return {
    librarySettings,
    isLoading,
    toggleSetting,
  };
};

export default useLibraryUpdates;
