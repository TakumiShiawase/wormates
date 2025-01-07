import React from 'react';
import styles from './BookInfo.module.scss';

import { ReactComponent as Cart } from '../../../../../assets/icon_mobile/cart.svg';
import { ReactComponent as Views } from '../../../../../assets/icon/views.svg';
import { ReactComponent as Download } from '../../../../../assets/icon/download.svg';
import { ReactComponent as Like } from '../../../../../assets/icon/heart.svg';
import { ReactComponent as Dislike } from '../../../../../assets/icon_mobile/dislike_book_detail.svg';
import { ReactComponent as Share } from '../../../../../assets/icon_mobile/share.svg';
import api from '../../../../../services/api';

const BookInfo = ({ src, volume, like, dislike, name, views, book_id }) => {
  const handleAddClick = async () => {
    try {
      const response = await api.post(`/api/book_detail/${book_id}/add_to_library/`, {});
      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }
      // Обработка успешного ответа
      console.log('Book added to library');
    } catch (error) {
      // Обработка ошибки
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  return (
    <div className={styles.book_info}>
      <div className={styles.book_img_container}>
        <img src={src} alt="coverpage" className={styles.book_img} />
        <div className={styles.menu}>
          <div className={styles.menu_item}>Vol {volume}</div>
          <button className={styles.menu_download}>
            <Download className={styles.download_icon} />
          </button>
          <button className={styles.menu_add} onClick={handleAddClick}>
            Add
          </button>
          <button className={styles.menu_read}>Read</button>
          <div className={styles.menu_item}>
            <Like className={styles.like_icon} />
            {like}
          </div>
          <div className={styles.menu_item}>
            <Dislike className={styles.like_icon} />
            {dislike}
          </div>
          <button className={styles.menu_share}>
            <Share className={styles.like_icon} />
            Share
          </button>
        </div>
      </div>
      <div className={styles.book_first_container}>
        <div className={styles.book_name}>{name}</div>
        <div className={styles.book_views_container}>
          <div className={styles.book_views}>
            <Views className={styles.views_icon} /> {views} Viewings
          </div>
          <div className={styles.cart_container}>
            <Cart />
            <div className={styles.book_cart}>Add to Cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
