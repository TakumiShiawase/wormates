import React from 'react';
import styles from './HeaderMobile.module.scss';
import { isAuthenticated } from '../../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import Search from '../../search/Search';
import { ReactComponent as Avatar } from '../../../assets/icon/avatar_mobile.svg';
import { ReactComponent as Studio } from '../../../assets/icon/studio_link.svg';
import { ReactComponent as Notifivation } from '../../../assets/icon/noti.svg';

const HeaderMobile = () => {
  const isAuth = useSelector(isAuthenticated);
  const avatar = useSelector((state) => state.profile.profileimg);

  const handleSearch = (query) => {
    console.log('Поиск книг с запросом:', query);
  };
  return (
    <header className={styles.headerMobile}>
      {isAuth && <Studio className={styles.studio} />}
      <Search
        onSearch={handleSearch}
        containerClassName={styles.search_container}
        inputClassName={styles.search_input}
        iconStyle={styles.search_icon}
      />
      {isAuth && <Notifivation className={styles.notification} />}
      {isAuth ? (
        <div>
          <img src={avatar} className={styles.avatar_img} alt="Avatar" />
        </div>
      ) : (
        <div className={styles.sign_in}>
          <Avatar className={styles.avatar} />
          <div className={styles.avatar_views}>Sign In</div>
        </div>
      )}
    </header>
  );
};

export default HeaderMobile;
