import useHistory from '../../../hooks/useHistory';
import HistoryMenu from './HistoryMenu';
import styles from './History.module.scss';
import HistoryItem from '../../items/book/HistoryItem';

const History = () => {
  const { historyData, loading, error } = useHistory();
  console.log(historyData);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Преобразуем historyData в массив [ключ, значение] и фильтруем только те, где есть книги
  const filteredData = Object.entries(historyData || {}).filter(
    ([_, books]) => books && books.length > 0,
  );

  if (filteredData.length === 0) {
    return (
      <div className={styles.history_content}>
        <div className={styles.views}>History</div>
        <div>
          <div className={styles.period}></div>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.nodata_views}>You have no history at the moment:&#40;</div>
            </div>
            <HistoryMenu />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.history}>
      <div className={styles.views}>History</div>
      <div className={styles.container}>
        <div className={styles.content}>
          {filteredData.map(([category, books]) => (
            <div key={category} className={styles.category}>
              <h3 className={styles.category_title}>{category}</h3>
              <div className={styles.books}>
                {books.map((book, index) => (
                  <HistoryItem key={index} book={book} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <HistoryMenu />
      </div>
    </div>
  );
};

export default History;
