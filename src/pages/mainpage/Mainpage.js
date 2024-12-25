import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Mainpage.module.scss';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';



const Mainpage = () => {
  return (
    <div className={styles.mainpage}>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
