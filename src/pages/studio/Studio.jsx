import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Studio.module.scss';
import Sidebar from '../../components/StudioSidebar/MainSidebar/StudioSidebar';

const Studio = () => {
  return (
    <div className={styles.mainpage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Studio;
