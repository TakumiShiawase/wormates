import React, { useState } from 'react';
import styles from './Footer.module.scss';
import { isAuthenticated } from '../../../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../../../../assets/icon/W.svg';
import { ReactComponent as Library } from '../../../../assets/icon_mobile/library.svg';
import { ReactComponent as Book } from '../../../../assets/icon_mobile/book.svg';
import { ReactComponent as History } from '../../../../assets/icon_mobile/history.svg';

const Footer = () => {
  const isAuth = useSelector(isAuthenticated);
  const [activeButton, setActiveButton] = useState('Home');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <footer className={styles.footer}>
      <button
        className={`${styles.footer_button} ${activeButton === 'Home' ? styles.active : ''}`}
        onClick={() => handleButtonClick('Home')}>
        <Logo className={styles.icon} />
        <div className={styles.views}>Home</div>
      </button>
      <button
        className={`${styles.footer_button} ${activeButton === 'Library' ? styles.active : ''}`}
        onClick={() => handleButtonClick('Library')}>
        <Library className={styles.icon} />
        <div className={styles.views}>Library</div>
      </button>
      <button
        className={`${styles.footer_button} ${activeButton === 'Books' ? styles.active : ''}`}
        onClick={() => handleButtonClick('Books')}>
        <Book className={styles.icon} />
        <div className={styles.views}>Books</div>
      </button>
      {isAuth && (
        <button
          className={`${styles.footer_button} ${activeButton === 'History' ? styles.active : ''}`}
          onClick={() => handleButtonClick('History')}>
          <History className={styles.icon} />
          <div className={styles.views}>History</div>
        </button>
      )}
    </footer>
  );
};

export default Footer;
