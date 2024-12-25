import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './DetailTabs.module.scss';

const DetailTabs = ({ tabs }) => {
  // Состояние активной вкладки
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  return (
    <div className={styles.tabsContainer}>
      {/* Заголовки вкладок */}
      <div className={styles.tabsHeader}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.tabButton} ${activeTab === tab.key ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.key)} // Установка активной вкладки
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Контент активной вкладки */}
      <div className={styles.tabContent}>{tabs.find((tab) => tab.key === activeTab)?.content}</div>
    </div>
  );
};

// Валидация пропсов
DetailTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired, // Уникальный идентификатор вкладки
      label: PropTypes.string.isRequired, // Текст заголовка вкладки
      content: PropTypes.node.isRequired, // Контент вкладки
    }),
  ).isRequired,
};

export default DetailTabs;
