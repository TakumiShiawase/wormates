import SidebarButton from './SidebarButton';
import GenreMenu from './GenreMenu';
import { useState, useEffect } from 'react';
import styles from './SidebarMenu.module.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '../../redux/auth/authSelectors';
import { ReactComponent as Home } from '../../assets/icon/home.svg';
import { ReactComponent as Library } from '../../assets/icon/library.svg';
import { ReactComponent as Book } from '../../assets/icon/book.svg';
import { ReactComponent as Setting } from '../../assets/icon/setting.svg';
import { ReactComponent as Help } from '../../assets/icon/help.svg';
import { ReactComponent as History } from '../../assets/icon/history.svg';
import { ReactComponent as News } from '../../assets/icon/news.svg';
import FollowersList from '../followers/FollowersList';

const SidebarMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(null);
  const isAuth = useSelector(isAuthenticated);

  useEffect(() => {
    const path = location.pathname;
    if (path.includes('library')) {
      setActiveButton('library');
    } else if (path === '/') {
      setActiveButton('');
    } else {
      setActiveButton(path.substring(1));
    }
  }, [location]);
  const handleClick = (label) => {
    setActiveButton(label); // Обновление активной кнопки
    if (label === 'library') {
      navigate('/library');
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      }); // Небольшая задержка для завершения перехода
    } else {
      navigate(`${label.toLowerCase()}`);
    }
  };

  return (
    <ul className={styles.sidebar_container}>
      <SidebarButton
        label="Home"
        onClick={() => handleClick('')}
        className={styles.sidebar_button}
        classActive={styles.sidebar_button_active}
        icon={<Home />}
        iconClass={styles.button_icon}
        isActive={activeButton === ''}
      />
      <SidebarButton
        label="Library"
        onClick={() => handleClick('library')}
        classActive={styles.sidebar_button_active}
        className={styles.sidebar_button}
        icon={<Library />}
        iconClass={styles.button_icon}
        isActive={activeButton === 'library'}
      />
      {isAuth && (
        <SidebarButton
          label="History"
          onClick={() => handleClick('history')}
          classActive={styles.sidebar_button_active}
          className={styles.sidebar_button}
          icon={<History />}
          iconClass={styles.button_icon}
          isActive={activeButton === 'history'}
        />
      )}
      {isAuth && (
        <SidebarButton
          label="News"
          onClick={() => handleClick('news')}
          classActive={styles.sidebar_button_active}
          className={styles.sidebar_button}
          icon={<News />}
          iconClass={styles.button_icon}
          isActive={activeButton === 'news'}
        />
      )}
      <div className={styles.line}>
        oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
      </div>
      <SidebarButton
        label="Books"
        className={styles.sidebar_book}
        classActive={styles.sidebar_button_active}
        icon={<Book />}
        iconClass={styles.button_icon}
      />
      <GenreMenu />
      {isAuth && (
        <div>
          <div className={styles.line}>
            oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
          </div>

          <SidebarButton
            label="Followers"
            className={styles.sidebar_book}
            classActive={styles.sidebar_button_active}
            icon={<Book />}
            iconClass={styles.button_icon}
          />

          <FollowersList />
        </div>
      )}
      <div className={styles.fol_line}>
        oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
      </div>
      <div className={styles.setting_buttons}>
        <div className={styles.setting}>
          <SidebarButton
            className={styles.setting_button}
            classActive={styles.setting_button_active}
            icon={<Setting />}
            iconClass={styles.setting_icon}
          />
          <div className={styles.setting_view}>Setting</div>
        </div>
        <div className={styles.setting}>
          <SidebarButton
            className={styles.setting_button}
            classActive={styles.setting_button_active}
            icon={<Help />}
            iconClass={styles.setting_icon}
          />
          <div className={styles.setting_view}>Help</div>
        </div>
      </div>
    </ul>
  );
};

export default SidebarMenu;
