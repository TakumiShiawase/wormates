import React from 'react';
import styles from './StudioHomeButtons.module.scss';

const StudioHomeButtons = ({ onClick, buttonTitle, lengthText, additionalText }) => {
  return (
    <button className={styles.button_block} onClick={onClick}>
      <span className={styles.button_title}>{buttonTitle}</span>
      <span className={styles.text}>{lengthText}</span>
      <span className={styles.text}>{additionalText}</span>
    </button>
  );
};

export default StudioHomeButtons;
