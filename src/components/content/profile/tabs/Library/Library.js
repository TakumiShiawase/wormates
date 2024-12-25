import React from 'react';
import { useLibrary } from '../../../../../hooks/useLibrary';
import styles from './Library.module.scss';
import { Link } from 'react-router-dom';

const Library = ({ username }) => {
  const { books, setFilter, filter } = useLibrary(username);

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Reading', value: 'reading' },
    { label: 'Liked', value: 'liked' },
    { label: 'Wish List', value: 'wish_list' },
    { label: 'Favorites', value: 'favorites' },
    { label: 'Finished', value: 'finished' },
  ];

  // Устанавливаем "all" как значение фильтра по умолчанию
  React.useEffect(() => {
    if (!filter) {
      setFilter('all');
    }
  }, [filter, setFilter]);

  // Получение фильтрованных книг на основе текущего фильтра
  const filteredBooks =
    books && books[filter] !== undefined
      ? filter === 'all'
        ? books.all || []
        : books[filter] || []
      : [];

  return (
    <div className={styles.library}>
      {/* Фильтры */}
      <div className={styles.library_tab}>
        {filters.map((filterItem) => (
          <button
            key={filterItem.value}
            className={
              filter === filterItem.value
                ? `${styles.library_button_active}`
                : `${styles.library_button}`
            }
            onClick={() => setFilter(filterItem.value)}>
            {filterItem.label}
          </button>
        ))}
      </div>

      {/* Список книг */}
      <div className={styles.library_items}>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div className={styles.library_item} key={book.id}>
              <Link to={`/book/${book.id}`}>
                <img
                  src={book.coverpage}
                  alt={`${book.name} cover`}
                  className={styles.library_item_img}
                />
              </Link>
              <div className={styles.library_item_content}>
                <Link to={`/book/${book.id}`}>
                  <div className={styles.library_item_name}>{book.name}</div>
                </Link>
                <div className={styles.library_item_author}>{book.author}</div>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.library_empty}>No books found</div>
        )}
      </div>
    </div>
  );
};

export default Library;
