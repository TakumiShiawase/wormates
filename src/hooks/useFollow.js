import { useState, useEffect } from 'react';

import api from '../services/api';
const useFollow = (username) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkFollowingStatus = async () => {
      try {
        const response = await api.get(`/users/api/${username}/following/`);
        setIsFollowing(response.data.isFollowing);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    checkFollowingStatus();
  }, [username]);

  const handleFollowClick = async () => {
    try {
      const response = await api.post(`/users/api/${username}/follow/`, {
        method: 'POST',
      });
      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }
      setIsFollowing(true);
      console.log('Follow request sent');
    } catch (err) {
      setError(err);
      console.error('There was a problem with the fetch operation:', err);
    }
  };

  return { isFollowing, loading, error, handleFollowClick };
};

export default useFollow;
