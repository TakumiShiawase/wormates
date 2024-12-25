import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BookItem = ({ book, style }) => {
  const { coverpage, name, author, views_count, upvotes, author_profile_img } = book;

  return (
    <div className={`${style?.bookItem}`}>
      <div className={`${style?.bookImage}`}>
      <Link to={`/book/${book.id}`}><img src={coverpage} alt={name} /></Link>
      </div>
      <div className={`${style?.bookDetails}`}>
        <div className={`${style?.authorAvatar}`}>
          <img src={author_profile_img} alt={author} />
        </div>
        <div className={`${style?.bookStatsContainer}`}>
        <Link to={`/book/${book.id}`}><div className={`${style?.bookTitle}`}>{name}</div></Link>
          <div className={`${style?.bookStats}`}>
            <div className={`${style?.bookAuthor}`}>{author}</div>
            <div className={`${style?.views}`}>{views_count} Viewings</div>
            <div className={`${style?.likes}`}>{upvotes} Liked</div>
          </div>
        </div>
      </div>
    </div>
  );
};

BookItem.propTypes = {
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

export default BookItem;
