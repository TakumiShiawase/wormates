import { useState, useEffect } from 'react';
import { fetchBooksNews } from '../services/books';

const useNews = () => {
  const [newsData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await fetchBooksNews();
        setBooksData(data);
      } catch (err) {
        setError('Failed to fetch books');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return { newsData, loading, error };
};

export default useNews;
