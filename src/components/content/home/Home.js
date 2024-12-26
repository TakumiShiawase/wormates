import React from 'react';
import useFetchBooks from '../../../hooks/useFetchBooks';

import BookItem from '../../items/book/BookItem';
import { useSelector } from 'react-redux';
import BookItemVertical from '../../items/book/BookItemVertical';
import styles from './Home.module.scss';

const Home = () => {
  const { books, loading, error } = useFetchBooks();

  const viewMode = useSelector((state) => state.userSettings.data.view_mode); // Извлекаем view_mode из Redux

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  const Books = viewMode === 'vertical' ? BookItemVertical : BookItem;

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  const itemStyles = {
    bookItem: styles.bookItem, // Пример кастомного класса
    bookImage: styles.bookImage,
    bookStatsContainer: styles.bookStatsContainer,
    bookDetails: styles.bookDetails,
    bookTitle: styles.bookTitle,
    bookAuthor: styles.bookAuthor,
    authorAvatar: styles.authorAvatar,
    bookStats: styles.bookStats,
    views: styles.views,
    likes: styles.likes,
  };

  return (
    <div className={styles.bookList}>
      <div className={styles.bookItems}>
        {books.map((book, index) => (
          <Books key={book.id || index} book={book} style={itemStyles} />
        ))}
      </div>
    </div>
  );
};

export default Home;
