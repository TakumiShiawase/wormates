import styles from './Header.module.scss';
import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/icon/logo.svg';
import { ReactComponent as Avatar } from '../../assets/icon/avatar.svg';
import { ReactComponent as Studio } from '../../assets/icon/studio_link.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setViewMode, saveUserSettings } from '../../redux/mainpage_settings/authActions';
import { ReactComponent as Notifivation } from '../../assets/icon/notification.svg';
import Search from '../search/Search';
import Button from '../LogInput/LogButton';
import { Link } from 'react-router-dom';
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
  const dispatch = useDispatch();
  const viewMode = useSelector((state) => state.userSettings.data.view_mode);

  const handleSetViewMode = (mode) => {
    dispatch(setViewMode(mode)); // Обновляем состояние локально
    dispatch(saveUserSettings({ view_mode: mode })); // Сохраняем на сервере
  };

  const handleSearch = (query) => {
    console.log('Поиск книг с запросом:', query);
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.orientacion}>
        <button
          onClick={() => handleSetViewMode('vertical')}
          className={`${styles.orientacion_button} ${
            viewMode === 'vertical' ? styles.orientacion_button_active : ''
          }`}>
          <div className={styles.ver_rectangle}></div>
        </button>
        <button
          onClick={() => handleSetViewMode('horizontal')}
          className={`${styles.orientacion_button} ${
            viewMode === 'horizontal' ? styles.orientacion_button_active : ''
          }`}>
          <div className={styles.hor_rectangle}></div>
        </button>
        <div className={styles.orientacion_view}>Show first volume only</div>
      </div>
      <div className={styles.search}>
        <Search
          onSearch={handleSearch}
          containerClassName={styles.search_container}
          inputClassName={styles.search_input}
          iconStyle={styles.search_icon}
        />
      </div>
      {isAuth ? (
        <div className={styles.user_menu}>
          <Button type="button" icon={<Studio />} customClass={styles.users_button} />
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
