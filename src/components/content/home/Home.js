import React from 'react';
import useFetchBooks from '../../../hooks/useFetchBooks';
import BookItem from '../../items/book/BookItem';
import styles from './Home.module.scss';

const Home = () => {
  const { books, loading, error } = useFetchBooks();

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
          <BookItem key={book.id || index} book={book} style={itemStyles} />
        ))}
      </div>
    </div>
  );
};

export default Home;
