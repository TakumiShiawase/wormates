import React from 'react';
import { useProfileComments } from '../../../../../hooks/useProfileComments';
import styles from './ProfileComment.module.scss';
import { ReactComponent as Delete } from '../../../../../assets/icon/delete.svg';

const Comments = () => {
  const { comments, loading, error } = useProfileComments();
  console.log(useProfileComments(comments));

  if (loading) {
    return <p>Загрузка комментариев...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Ошибка: {error}</p>;
  }

  return (
    <div className={styles.comments_list}>
      {comments.map((comment) => (
        <div className={styles.comment_item} key={comment.id}>
          <div className={styles.comment_container}>
            <div className={styles.views}>Your comments</div>
            <div className={styles.comment_content}>{comment.text}</div>
          </div>
          <div className={styles.reply_container}>
            <div className={styles.views}>In reply to</div>
            <div className={styles.comment_content}>{comment.book_name}</div>
          </div>
          <div className={styles.date_container}>
            <div className={styles.views}>Date</div>
            <div className={styles.comment_date}>
              {comment.formatted_timestamp} <Delete className={styles.delete_icon} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
