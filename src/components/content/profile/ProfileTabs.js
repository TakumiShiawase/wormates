import React, { useState, Suspense, lazy } from 'react';
import styles from './Profile.module.scss';
// Ленивая загрузка компонентов вкладок
const Library = lazy(() => import('./tabs/Library/Library'));
const Books = lazy(() => import('./tabs/Books/ProfileBooks'));
const Comment = lazy(() => import('./tabs/Comment/ProfileComment'));
const Description = lazy(() => import('./tabs/Description/ProfileDescription'));

// Список вкладок
const TABS = [
  { id: 'library', label: 'Library', Component: Library },
  { id: 'books', label: 'Books', Component: Books },
  { id: 'Series', label: 'Series', Component: Library },
  { id: 'comments', label: 'My Comments', Component: Comment },
  { id: 'reviews', label: 'My Reviews', Component: Library },
  { id: 'description', label: 'Description', Component: Description },
  { id: 'settings', label: 'Settings', Component: Library },
];

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id); // Текущая вкладка

  return (
    <div>
      {/* Табуляция */}
      <div className={styles.navigation}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={
              activeTab === tab.id
                ? styles.notification_enabled // Активный стиль
                : styles.notification_disabled // Неактивный стиль
            }
            onClick={() => setActiveTab(tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Содержимое вкладки */}
      <div className={styles.tab_content}>
        <Suspense fallback={<p>Загрузка...</p>}>
          {TABS.map(
            (tab) => activeTab === tab.id && <tab.Component key={tab.id} />, // Рендерим только активную вкладку
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default ProfileTabs;
