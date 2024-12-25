import { useState, useEffect } from 'react';
import { fetchBooksHistory } from '../services/books';

const useHistory = () => {
  const [historyData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await fetchBooksHistory();
        setBooksData(data);
      } catch (err) {
        setError('Failed to fetch books');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return { historyData, loading, error };
};

export default useHistory;
