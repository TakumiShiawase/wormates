import React from 'react';
import styles from './StudioSidebar.module.scss';
import { ReactComponent as Logo } from '../../../assets/icon/logo_mini.svg';
import { ReactComponent as Home } from '../../../assets/icon/home.svg';
import { ReactComponent as Book } from '../../../assets/icon/book.svg';
import SidebarButton from '../../sidebar/SidebarButton';

const StudioSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Logo className={styles.logo_img} />
      </div>
      <div className={styles.buttons}>
        <SidebarButton
          label="Home"
          className={styles.sidebar_button}
          classActive={styles.sidebar_button_active}
          iconClass={styles.button_icon}
          icon={<Home />}
        />
        <SidebarButton
          label="Books"
          className={styles.sidebar_button}
          classActive={styles.sidebar_button_active}
          icon={<Book />}
          iconClass={styles.button_icon}
        />
      </div>
    </div>
  );
};

export default StudioSidebar;
