import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './BookItemVertical.module.scss';
import { ReactComponent as Like } from '../../../assets/icon/heart.svg';
import { ReactComponent as Views } from '../../../assets/icon/views.svg';

const BookItemVertical = ({ book }) => {
  const { coverpage, name, author, views_count, rating, author_profile_img, volume_number } = book;

  return (
    <div className={styles.bookItem}>
      <div className={styles.bookImage}>
        <Link to={`/book/${book.id}`}>
          <img src={coverpage} alt={name} />
          <div class={styles.coverpageMenu}>
            <div className={styles.count}>
              <Views className={styles.icon} />
              {views_count}
            </div>
            <div className={styles.count}>
              <Like className={styles.icon} />
              {rating}
            </div>
            <div className={styles.volume}>{volume_number}</div>
          </div>
        </Link>
      </div>
      <div className={styles.bookDetails}>
        <div className={styles.authorAvatar}>
          <img src={author_profile_img} alt={author} />
        </div>
        <div className={styles.bookStatsContainer}>
          <Link to={`/book/${book.id}`}>
            <div className={styles.bookTitle}>{name}</div>
          </Link>
          <div className={styles.bookAuthor}>{author}</div>
        </div>
      </div>
    </div>
  );
};

BookItemVertical.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    authorAvatar: PropTypes.string.isRequired,
  }).isRequired,
  style: PropTypes.object, // Пропс для внешних стилей
};

export default BookItemVertical;
