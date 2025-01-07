import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useChapters from '../../hooks/useChapters';
import useReaderSettings from '../../hooks/useReaderSettings';
import ReaderSidebar from './ReaderSidebar';
import styles from './Reader.module.scss';
import SettingsModal from './SettingModal';
import { ReactComponent as LogoMini } from '../../assets/icon/logo_mini.svg';
import { ReactComponent as Setting } from '../../assets/icon/setting.svg';
import { ReactComponent as ReadingMode } from '../../assets/icon/reading_mode.svg';

function Reader() {
  const { book_id } = useParams();
  const { chapters, loading, error } = useChapters(book_id);
  const { settings, loading: settingsLoading, error: settingsError } = useReaderSettings();
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [textSize, setTextSize] = useState(16);
  const [textWidth, setTextWidth] = useState(600);
  const [rowHeight, setRowHeight] = useState(1.5);
  const [font, setFont] = useState('Arial');
  const [theme, setTheme] = useState('light');
  const [style, setStyle] = useState('main_sepia');
  const [isTwoColumns, setIsTwoColumns] = useState(false);

  useEffect(() => {
    if (settings) {
      setTextSize(settings.font_size);
      setTextWidth(settings.text_position);
      setRowHeight(settings.line_height);
      setFont(['Arial', 'Times New Roman', 'Courier New'][settings.font - 1]);
      setTheme(settings.theme);
      setStyle(`main_${settings.theme}`);
      document.documentElement.style.setProperty('--text-size', `${settings.font_size}px`);
      document.documentElement.style.setProperty('--text-width', `${settings.text_position}px`);
      document.documentElement.style.setProperty('--row-height', settings.line_height);
      document.documentElement.style.setProperty('--font', settings.font);
    }
  }, [settings]);

  useEffect(() => {
    document.documentElement.style.setProperty('--text-size', `${textSize}px`);
  }, [textSize]);

  useEffect(() => {
    document.documentElement.style.setProperty('--text-width', `${textWidth}px`);
  }, [textWidth]);

  useEffect(() => {
    document.documentElement.style.setProperty('--row-height', rowHeight);
  }, [rowHeight]);

  useEffect(() => {
    document.documentElement.style.setProperty('--font', font);
  }, [font]);

  useEffect(() => {
    setStyle(`main_${theme}`);
  }, [theme]);

  const toggleColumns = () => {
    setIsTwoColumns(!isTwoColumns);
  };

  if (loading || settingsLoading)
    return (
      <div className={`${styles[style]}`}>
        <div className={styles.reader_mobile__loader}>
          <LogoMini className={styles.reader_mobile__loading_logo} />
          <div className={styles.loading_bar}></div>
          <div className={styles.loading_views}>Loading...</div>
        </div>
      </div>
    );
  if (error || settingsError) return <div>Error: {error?.message || settingsError?.message}</div>;

  const handleSettingsClick = (event) => {
    event.preventDefault();
    setSettingsVisible(!settingsVisible);
  };

  return (
    <div className={`${styles[style]}`}>
      <ReaderSidebar bookId={book_id} />
      <div className={styles.reader_content_container}>
        {chapters.map((chapter) => (
          <div className={styles.reader_content} key={chapter.id}>
            <div className={styles.reader_title}>{chapter.title}</div>
            <div className={styles.line}></div>
            <div className={isTwoColumns ? styles.reader_text_two_columns : styles.reader_text}>
              {chapter.content}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.reader_buttons}>
        <button
          onClick={toggleColumns}
          className={isTwoColumns ? styles.reading_mode_on : styles.reading_mode_off}>
          <ReadingMode className={styles.buttons_icon} />
        </button>
        <button className={styles.reader_button} onClick={handleSettingsClick}>
          <Setting className={styles.buttons_icon} />
        </button>
        {settingsVisible && (
          <SettingsModal
            onClose={() => setSettingsVisible(false)}
            onStyleChange={setStyle}
            textSize={textSize}
            setTextSize={setTextSize}
            textWidth={textWidth}
            setTextWidth={setTextWidth}
            rowHeight={rowHeight}
            setRowHeight={setRowHeight}
            font={font}
            setFont={setFont}
            theme={theme}
            setTheme={setTheme}
          />
        )}
      </div>
    </div>
  );
}

export default Reader;
