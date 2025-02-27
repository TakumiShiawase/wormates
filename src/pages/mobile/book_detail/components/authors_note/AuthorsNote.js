import React from 'react';
import styles from '../../BookDetailMobile.module.scss';

const AuthorsNote = ({ content }) => {
  return (
    <div className={styles.authors_note}>
      <div className={styles.authors_note_view}>Author's Note</div>
      <div className={styles.authors_note_text}>{content}</div>
    </div>
  );
};

export default AuthorsNote;
