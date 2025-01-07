import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookAuthorInfo.module.scss';
import useFollow from '../../../../../hooks/useFollow';

const BookAuthorInfo = ({ src, author_name, followers }) => {
  const { isFollowing, handleFollowClick } = useFollow(author_name);

  return (
    <div className={styles.author_info}>
      <div className={styles.author_container}>
        <div className={styles.author_content}>
          <img src={src} className={styles.avatar} alt="Avatar" />
          <div className={styles.author_name}>{author_name}</div>
          <div className={styles.followers}>{followers} Followers</div>
        </div>
        <button className={styles.follow_button} onClick={handleFollowClick} disabled={isFollowing}>
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
};

BookAuthorInfo.propTypes = {
  src: PropTypes.string.isRequired,
  author_name: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
};

export default BookAuthorInfo;
