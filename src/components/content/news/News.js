import styles from './News.module.scss';
import HistoryItem from '../../items/book/HistoryItem';
import useNews from '../../../hooks/useNews';
import NewsMenu from './NewsMenu';

const News = () => {
  const { newsData } = useNews();
  const books = newsData[''];

  // Проверка, если books пустой
  if (!books || books.length === 0) {
    return (
      <div className={styles.history}>
        <div className={styles.history_content}>
          <div className={styles.views}>Updates</div>
          <div>
            <div className={styles.container}>
              <div className={styles.content}>
                <div className={styles.views_book}>Books</div>
                <div className={styles.nodata_views}>You have no news at the moment. 😔</div>
              </div>
              <NewsMenu />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.history}>
      <div className={styles.history_content}>
        <div className={styles.views}>Updates</div>
        <div className={styles.views_book}>somePeriod</div>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.views_book}>Books</div>
            {books.map((book, index) => (
              <HistoryItem key={index} book={book} />
            ))}
          </div>
          <NewsMenu />
        </div>
      </div>
    </div>
  );
};

export default News;
