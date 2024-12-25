import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getFollowers } from '../services/profile';

const useFollowers = () => {
  const [followers, setFollowers] = useState([]);
  const username = useSelector((state) => state.auth.username);

  useEffect(() => {
    if (username) {
      const fetchFollowers = async () => {
        try {
          const data = await getFollowers(username);
          if (data && Array.isArray(data)) {
            setFollowers(data);
          } else {
            setFollowers([]); // Если данные некорректные, устанавливаем пустой массив
          }
        } catch (error) {
          console.error('Ошибка при получении фолловеров:', error);
          setFollowers([]); // В случае ошибки также ставим пустой массив
        }
      };

      fetchFollowers();
    }
  }, [username]);

  return followers;
};
export default useFollowers;
