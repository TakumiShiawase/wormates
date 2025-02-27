import React from 'react';
import styles from './Columns.module.scss';

const ColumnHeaders = () => {
  return (
    <div className={styles.headers}>
      <div className="grid-item">BookName</div>
      <div className="grid-item">Covrpage</div>
      <div className="grid-item">Volume</div>
      <div className="grid-item">Series</div>
      <div className="grid-item">Visibility</div>
      <div className="grid-item">Restrictions</div>
      <div className="grid-item">Date</div>
    </div>
  );
};

export default ColumnHeaders;
