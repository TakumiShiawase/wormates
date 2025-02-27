import React from 'react';
import styles from './Columns.module.scss';
import { ReactComponent as Trash } from '../../assets/icon/trash.svg';

const Columns = ({ books, onDelete }) => {
  return (
    <div className={styles.grid_container}>
      <div className={`${styles.grid_row_header} ${styles.headers}`}>
        <div className={styles.grid_item}>Book Name</div>
        <div className={styles.grid_item}>Coverpage</div>
        <div className={styles.grid_item}>Volume</div>
        <div className={styles.grid_item}>Series</div>
        <div className={styles.grid_item}>Visibility</div>
        <div className={styles.grid_item}>Restrictions</div>
        <div className={styles.grid_item}>Date</div>
      </div>

      {books.map((book, index) => (
        <div key={index} className={styles.grid_row}>
          <div className={`${styles.grid_item} ${styles.book_name}`}>
            <span className={styles.book_name}>{book.name}</span>
          </div>
          <div className={styles.grid_item}>
            <img className={styles.img} src={book.coverpage} alt={`Обложка ${book.name}`} />
          </div>
          <div className={styles.grid_item}>{book.volume_number}</div>
          <div className={styles.grid_item}>{book.series_id}</div>
          <div className={styles.grid_item}>{book.visibility}</div>
          <div className={styles.grid_item}>
            {book.is_adult ? <span className={styles.adult_label}>18+</span> : 'No'}
          </div>
          <div className={`${styles.grid_item} ${styles.date}`}>
            {book.last_chapter_info.created}
            <br />
            {book.status}
          </div>
          <div className={styles.grid_item}>
            <button className={styles.delete_button} onClick={() => onDelete(book.id)}>
              <Trash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Columns;
