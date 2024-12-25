import React from 'react';
import SidebarMenu from './SidebarMenu';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePage } from '../../redux/navigation/navActions';

const Sidebar = () => {
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.nav?.activePage);
  console.log(activePage);
  const handlePageSelect = (newPage) => {
    dispatch(setActivePage(newPage)); // Диспатчим действие для изменения активной страницы
  };

  return (
    <div className="sidebar">
      <SidebarMenu activePage={activePage} onSelectPage={handlePageSelect} />
    </div>
  );
};

export default Sidebar;
