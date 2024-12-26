import React, { useState, useEffect } from 'react';
import styles from './Reader.module.scss';
import { ReactComponent as TextSize } from '../../assets/icon/text_size.svg';

function SettingsModal({ onClose, onStyleChange }) {
  const [textSize, setTextSize] = useState(16);
  const [textWidth, setTextWidth] = useState(600);
  const [rowHeight, setRowHeight] = useState(1.5);
  const [font, setFont] = useState('Arial');

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
          onChange={(e) => setTextSize(e.target.value)}
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
          onChange={(e) => setTextWidth(e.target.value)}
          className={styles.slider}
        />
      </div>
      <div className={styles.input_cont}>
        <div className={styles.views_cont}>
          <TextSize className={styles.icon} />
          <span>Row Heigth</span>
        </div>
        <input
          type="range"
          min="1"
          max="2"
          step="0.1"
          value={rowHeight}
          onChange={(e) => setRowHeight(e.target.value)}
          className={styles.slider}
        />
      </div>
      <div>
        <div className={styles.views_parm}>Font</div>
        <select className={styles.font} value={font} onChange={(e) => setFont(e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>
      </div>
      <div className={styles.views_theme}>Theme</div>
      <div className={styles.theme}>
        <button
          className={styles.button_light}
          onClick={() => onStyleChange('main_light')}></button>
        <button className={styles.button_dark} onClick={() => onStyleChange('main_dark')}></button>
        <button
          className={styles.button_sepia}
          onClick={() => onStyleChange('main_sepia')}></button>
      </div>
    </div>
  );
}
export default SettingsModal;
