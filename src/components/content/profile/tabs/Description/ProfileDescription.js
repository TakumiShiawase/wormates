import React, { useState } from 'react';
import { useDescription } from '../../../../../hooks/useDescription';
import styles from './ProfileDescription.module.scss';
import { ReactComponent as Pencil } from '../../../../../assets/icon/pencil.svg';
import { ReactComponent as Save } from '../../../../../assets/icon/save.svg';
import { ReactComponent as Cancel } from '../../../../../assets/icon/cancel.svg';

const DescriptionEditor = ({ username }) => {
  const { description, loading, setDescription, saveDescription } = useDescription(username);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async () => {
    await saveDescription(description);
    setIsEditing(false);
  };

  if (loading) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className={styles.descriptionEditor}>
      {!isEditing ? (
        <div className={styles.description_container}>
          <p className={styles.descriptionText}>
            {description ? description : 'You Do not have any description yet:('}
          </p>
          <button className={styles.editButton} onClick={() => setIsEditing(true)}>
            <Pencil className={styles.pencil_icon} />
          </button>
        </div>
      ) : (
        <div className={styles.description_content}>
          <textarea
            className={styles.descriptionInput}
            value={description || ''}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className={styles.button_container}>
            <button className={styles.button} onClick={handleSave} disabled={loading}>
              <Save className={styles.button_icon} />
            </button>
            <button
              className={styles.button}
              onClick={() => setIsEditing(false)}
              disabled={loading}>
              <Cancel className={styles.button_icon} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DescriptionEditor;
