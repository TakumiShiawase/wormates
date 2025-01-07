import React, { useEffect } from 'react';
import styles from './Reader.module.scss';
import { ReactComponent as TextSize } from '../../assets/icon/text_size.svg';
import useSettingsModal from '../../hooks/useSettingsModal';

function SettingsModal({
  onClose,
  onStyleChange,
  textSize,
  setTextSize,
  textWidth,
  setTextWidth,
  rowHeight,
  setRowHeight,
  font,
  setFont,
  theme,
  setTheme,
}) {
  const { saveSettings } = useSettingsModal();

  useEffect(() => {
    onStyleChange(`main_${theme}`);
  }, [theme, onStyleChange]);

  const handleTextSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setTextSize(newSize);
    saveSettings({ textSize: newSize });
  };

  const handleTextWidthChange = (e) => {
    const newWidth = parseInt(e.target.value);
    setTextWidth(newWidth);
    saveSettings({ textWidth: newWidth });
  };

  const handleRowHeightChange = (e) => {
    const newHeight = parseFloat(e.target.value);
    setRowHeight(newHeight);
    saveSettings({ rowHeight: newHeight });
  };

  const handleFontChange = (e) => {
    const newFont = e.target.value;
    setFont(newFont);
    saveSettings({ font: newFont });
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    saveSettings({ theme: newTheme });
  };

  return (
    <div className={styles.modal}>
      <div className={styles.input_cont}>
        <div className={styles.views_cont}>
          <TextSize className={styles.icon} />
          <span>Text Size</span>
        </div>
        <input
          type="range"
          min="10"
          max="30"
          value={textSize}
          onChange={handleTextSizeChange}
          className={styles.slider}
        />
      </div>
      <div className={styles.input_cont}>
        <div className={styles.views_cont}>
          <TextSize className={styles.icon} />
          <span>Text Width</span>
        </div>
        <input
          type="range"
          min="400"
          max="800"
          value={textWidth}
          onChange={handleTextWidthChange}
          className={styles.slider}
        />
      </div>
      <div className={styles.input_cont}>
        <div className={styles.views_cont}>
          <TextSize className={styles.icon} />
          <span>Row Height</span>
        </div>
        <input
          type="range"
          min="1"
          max="2"
          step="0.1"
          value={rowHeight}
          onChange={handleRowHeightChange}
          className={styles.slider}
        />
      </div>
      <div>
        <div className={styles.views_parm}>Font</div>
        <select className={styles.font} value={font} onChange={handleFontChange}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>
      </div>
      <div className={styles.views_theme}>Theme</div>
      <div className={styles.theme}>
        <button className={styles.button_light} onClick={() => handleThemeChange('light')}></button>
        <button className={styles.button_dark} onClick={() => handleThemeChange('dark')}></button>
        <button className={styles.button_sepia} onClick={() => handleThemeChange('sepia')}></button>
      </div>
    </div>
  );
}

export default SettingsModal;
