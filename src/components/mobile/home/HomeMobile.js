import React from 'react';
import useFetchBooks from '../../../hooks/useFetchBooks';
import { Link } from 'react-router-dom';
import { ReactComponent as Views } from '../../../assets/icon_mobile/views.svg';
import { ReactComponent as Like } from '../../../assets/icon_mobile/like.svg';
import { ReactComponent as Dislike } from '../../../assets/icon_mobile/dislike.svg';
import styles from './HomeMobile.module.scss';

const Home = () => {
  const { books, loading, error } = useFetchBooks();

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.bookList}>
      <div className={styles.bookItems}>
        {books.map((book, index) => (
          <div key={index} className={styles.book}>
            <div className={styles.bookImageContainer}>
              <Link to={`/test/${book.id}/`}>
                <img
                  src={book.coverpage}
                  alt={`${book.title} cover`}
                  className={styles.bookCover}
                />
              </Link>
              <div className={styles.overlayMenu}>
                <div className={styles.avtorContainer}>
                  <div className={styles.avtor}>{book.author}</div>
                  <img src={book.author_profile_img} alt="avatar" className={styles.avtorImg} />
                </div>
                <div className={styles.volume}>{book.volume_number}</div>
              </div>
            </div>
            <div className={styles.bookDetails}>
              <Link to={`/test/${book.id}/`}>
                <div className={styles.bookName}>{book.name}</div>{' '}
              </Link>
              <div className={styles.bookInfo}>
                <div className={styles.bookCount}>
                  <Views className={styles.countIcon} />
                  {book.views_count}
                </div>
                <div className={styles.bookCount}>
                  <Like className={styles.countIcon} />
                  {book.rating}
                </div>
                <div className={styles.bookCount}>
                  <Dislike className={styles.countIcon} />
                  {book.user_vote}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
