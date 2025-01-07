import React from 'react';
import styles from './BookChapterInfo.module.scss';
import { ReactComponent as Pencil } from '../../../../../assets/icon/pencil.svg';
import { ReactComponent as Page } from '../../../../../assets/icon_mobile/page.svg';

const BookChapterInfo = ({ genre, subgenres, text, page, date }) => {
  return (
    <div className={styles.book_chapter_info}>
      <div className={styles.genre_container}>
        <button className={styles.genre_item}>{genre}</button>
        {subgenres && <button className={styles.genre_item}>{subgenres}</button>}
      </div>
      <div className={styles.about_container}>
        <div className={styles.about_info}>
          <div className={styles.about_views}>About Book</div>
          <div className={styles.about_date}>
            <Pencil className={styles.icon} />
            Changed: {date}
          </div>
          <div className={styles.about_date}>
            <Page className={styles.icon} />
            Total Pages: {page}
          </div>
        </div>
        <div className={styles.about_content}>{text}</div>
      </div>
    </div>
  );
};

export default BookChapterInfo;
