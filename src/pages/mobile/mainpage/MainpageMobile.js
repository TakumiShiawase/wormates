import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './MainpageMobile.module.scss';
import HeaderMobile from '../../../components/mobile/header/HeaderMobile';
import Footer from '../../../components/mobile/header/footer/Footer';

const MainpageMobile = () => {
  return (
    <div className={styles.mainpage}>
      <HeaderMobile />
      <div className={styles.container}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainpageMobile;
