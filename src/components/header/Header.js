import styles from './Header.module.scss';
import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/icon/logo.svg';
import { ReactComponent as Avatar } from '../../assets/icon/avatar.svg';
import { ReactComponent as Studio } from '../../assets/icon/studio_link.svg';

import { ReactComponent as Notifivation } from '../../assets/icon/notification.svg';
import Search from '../search/Search';
import Button from '../LogInput/LogButton';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '../../redux/auth/authSelectors';
import UserModals from '../modals/user_modals/UserModals';

const Header = () => {
  const isAuth = useSelector(isAuthenticated);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const avatar = useSelector((state) => state.profile.profileimg);
  const toggleModal = (event) => {
    event.stopPropagation(); // Останавливаем всплытие события
    setIsModalOpen((prev) => !prev); // Меняем состояние
  };

  const handleSearch = (query) => {
    console.log('Поиск книг с запросом:', query);
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.search}>
        <Search
          onSearch={handleSearch}
          containerClassName={styles.search_container}
          inputClassName={styles.search_input}
          iconStyle={{
            position: 'absolute',
            right: '25px',
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
          }}
        />
      </div>
      {isAuth ? (
        <div className={styles.user_menu}>
          <Button type="button" icon={<Studio />}  customClass={styles.users_button} />
          <Button type="button" icon={<Notifivation />} customClass={styles.users_button} />
          <Button
            type="button"
            img={avatar}
            customClass={styles.users_avatar_button}
            onClick={toggleModal}
          />
          <UserModals isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      ) : (
        <div className={styles.users_menu}>
          <Link to={'/login'}>
            {' '}
            <Button
              text="Sign In"
              type="button"
              customClass={styles.link_button}
              icon={<Avatar />}
              iconClass={styles.link_icon}
              style={{
                width: '310px',
                height: '42px',
              }}
            />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
