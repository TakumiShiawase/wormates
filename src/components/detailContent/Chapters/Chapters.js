import React from 'react';
import useFetchChapters from '../../../hooks/useChapters';
import styles from './Chapters.module.scss';

const ChaptersGrid = ({ bookId }) => {
  const { chapters, loading, error } = useFetchChapters(bookId);
  console.log('hui', chapters);

  const divideChapters = (chapters, columns) => {
    const result = Array.from({ length: columns }, () => []);
    let columnIndex = 0;

    chapters.forEach((chapter) => {
      result[columnIndex].push(chapter);
      columnIndex = (columnIndex + 1) % columns;
    });

    return result;
  };

  if (loading) return <div className="loading">Загрузка...</div>;
  if (error) return <div className="error">{error}</div>;

  const columns = divideChapters(chapters, 4);

  return (
    <div className={styles.grid_container}>
      {columns.map((column, index) => (
        <div className={styles.grid_colum} key={index}>
          {column.map((chapter, idx) => (
            <div className={styles.chapter_item} key={idx}>
              {chapter.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChaptersGrid;
