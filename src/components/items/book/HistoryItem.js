import React from 'react';
import PropTypes from 'prop-types';
import styles from './HistoryItem.module.scss';
import { Link } from 'react-router-dom';

import { ReactComponent as Like } from '../../../assets/icon/like.svg';
import { ReactComponent as Views } from '../../../assets/icon/views.svg';
import { ReactComponent as Change } from '../../../assets/icon/change.svg';

const HistoryItem = ({ book }) => {
  return (
    <div className={styles.item}>
      <div>
        <Link to={`/book/${book.id}`}>
          <img src={book.coverpage} alt={book.book_name} className={styles.coverpage} />
        </Link>
        <div className={styles.stats}>
          <div className={styles.count_stats}>
            <Views />
            {book.views_count} •
          </div>
          <div className={styles.count_stats}>
            <Like />
            {book.upvotes} •
          </div>
          <div className={styles.count_stats}>
            <Change />
            Changed: {new Date(book.last_modified).toLocaleDateString()}
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.author_name}>{book.author_name}</div>
        <Link to={`/book/${book.id}`}>
          <div className={styles.book_name}>{book.name}</div>
        </Link>
        <div className={styles.series_count}>
          <div className={styles.series_name}>Series: {book.series_name}</div> •
          <div className={styles.series}>Volume: {book.volume_number}</div>
        </div>
        <div className={styles.description}>{book.description}</div>
      </div>
    </div>
  );
};

HistoryItem.propTypes = {
  book: PropTypes.shape({
    coverpage: PropTypes.string.isRequired,
    book_name: PropTypes.string.isRequired,
    views_count: PropTypes.number.isRequired,
    upvotes: PropTypes.number.isRequired,
    last_modified: PropTypes.string.isRequired,
    author_name: PropTypes.string.isRequired,
    series_name: PropTypes.string,
    volume_number: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default HistoryItem;
