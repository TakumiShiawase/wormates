import React from 'react';
import useRecommendations from '../../hooks/useRecom';
import styles from './Reccom.module.scss';

const RecommendationsList = ({ book_id }) => {
  const { recommendations, loading, error } = useRecommendations(book_id);
  console.log(recommendations);

  if (loading) return <p>Загрузка рекомендаций...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.recom}>
      {recommendations.map((book) => (
        <div className={styles.book_item} key={book.id}>
          <img className={styles.book_coverpage} src={book.coverpage} alt="" />
          <div className={styles.info}>
            <img className={styles.avatar} src={book.author_profile_img} alt="" />
            <div>
              <div className={styles.name}>{book.name}</div>
              <div className={styles.author}>{book.author}</div>
              <div className={styles.views}>{book.views_count} Viewings</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
