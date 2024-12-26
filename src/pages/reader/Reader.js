import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useChapters from '../../hooks/useChapters';
import ReaderSidebar from './ReaderSidebar';
import styles from './Reader.module.scss';
import SettingsModal from './SettingModal';
import { ReactComponent as LogoMini } from '../../assets/icon/logo_mini.svg';
import { ReactComponent as Setting } from '../../assets/icon/setting.svg';

function Reader() {
  const { book_id } = useParams();
  const { chapters, loading, error } = useChapters(book_id);
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [style, setStyle] = useState('main_sepia');

  if (loading)
    return (
      <div className={`${styles[style]}`}>
        <div className={styles.reader_mobile__loader}>
          <LogoMini className={styles.reader_mobile__loading_logo} />
          <div className={styles.loading_bar}></div>
          <div className={styles.loading_views}>Loading...</div>
        </div>
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={`${styles[style]}`}>
      <ReaderSidebar bookId={book_id} />
      <div className={styles.reader_content}>
        {chapters.map((chapter) => (
          <div className={styles.reader_content} key={chapter.id}>
            <div className={styles.reader_title}>{chapter.title}</div>
            <div className={styles.line}></div>
            <div className={styles.reader_text}>{chapter.content}</div>
          </div>
        ))}
      </div>
      <div className={styles.reader_buttons}>
        <button
          className={styles.reader_button}
          onClick={() => setSettingsVisible(!settingsVisible)}>
          <Setting className={styles.buttons_icon} />
        </button>
        {settingsVisible && (
          <SettingsModal onClose={() => setSettingsVisible(false)} onStyleChange={setStyle} />
        )}
      </div>
    </div>
  );
}

export default Reader;
