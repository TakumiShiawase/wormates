import React from 'react';
import Search from '../../search/Search';
import styles from './History.module.scss';
import ButtonHistory from '../../buttons/ButtonHistory';
import { ReactComponent as Delete } from '../../../assets/icon/delete.svg';
import SwtichButton from '../../buttons/SwitchButton';
import useRecordState from '../../../hooks/useRecord';
import useDeleteHistory from '../../../hooks/useDeleteHistory';

const HistoryMenu = () => {
  const [isRecord, setIsRecord] = useRecordState();
  const { deleteHistory } = useDeleteHistory();
  const handleSearch = (query) => {
    console.log('Поиск книг с запросом:', query);
  };
  const handleRecordChange = (newState) => {
    setIsRecord(newState); // Обновляем состояние в родительском компоненте
    console.log('Кнопка переключена на состояние:', newState ? 'True' : 'False');
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
      <ButtonHistory
        text="Clear History"
        customClass={styles.clear_button}
        iconClass={styles.clear_icon}
        classActive={styles.clear_button_active}
        icon={<Delete />}
        onClick={deleteHistory}
      />
      <div className={styles.record}>
        Record History <SwtichButton isEnabled={isRecord} onChange={handleRecordChange} />
      </div>
    </div>
  );
};

export default HistoryMenu;
