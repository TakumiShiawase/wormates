import React from 'react';
import Search from '../../search/Search';
import styles from './News.module.scss';
import SwtichButton from '../../buttons/SwitchButton';
import useLibraryUpdates from '../../../hooks/useLibraryUpdate';

const NewsMenu = () => {
  const { librarySettings, toggleSetting } = useLibraryUpdates();
  const handleSearch = (query) => {
    console.log('Поиск книг с запросом:', query);
  };

  return (
    <div className={styles.history_container}>
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
      <div className={styles.not_views}>Notification Categories:</div>
      <div className={styles.switch}>
        Reading
        <SwtichButton
          isEnabled={librarySettings.library_reading_updates}
          onChange={() => toggleSetting('library_reading_updates')}
        />
      </div>
      <div className={styles.switch}>
        Liked{' '}
        <SwtichButton
          isEnabled={librarySettings.library_liked_updates}
          onChange={() => toggleSetting('library_liked_updates')}
        />
      </div>
      <div className={styles.switch}>
        Wish List{' '}
        <SwtichButton
          isEnabled={librarySettings.library_wishlist_updates}
          onChange={() => toggleSetting('library_wishlist_updates')}
        />
      </div>
      <div className={styles.switch}>
        Favorites{' '}
        <SwtichButton
          isEnabled={librarySettings.library_favourite_updates}
          onChange={() => toggleSetting('library_favourite_updates')}
        />
      </div>
    </div>
  );
};

export default NewsMenu;
