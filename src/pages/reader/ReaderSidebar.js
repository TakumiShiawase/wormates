import React from 'react';
import useChapters from '../../hooks/useChapters';
import { ReactComponent as LogoMini } from '../../assets/icon/logo_mini.svg';
import styles from './Reader.module.scss';
function ReaderSidebar({ bookId }) {
  const { chapters } = useChapters(bookId);

  return (
    <div className={styles.sidebar}>
      <LogoMini className={styles.logo_mini} />
      <ul>
        {chapters.map((chapter) => (
          <li className={styles.sidebar_chapter} key={chapter.id}>
            {chapter.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReaderSidebar;
