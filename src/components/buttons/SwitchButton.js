import React from 'react';
import PropTypes from 'prop-types';
import styles from './SwitchButton.module.scss'; // Импорт стилей для кнопки

const SwitchButton = ({ isEnabled, onChange, customClass = '' }) => {
  const handleClick = () => {
    const newStatus = !isEnabled; // Переключаем состояние
    if (onChange) onChange(newStatus); // Вызываем callback, если передан
  };

  return (
    <button
      className={`${styles.notification} ${
        isEnabled ? styles.enabled : styles.disabled
      }${customClass}`}
      onClick={handleClick}></button>
  );
};

SwitchButton.propTypes = {
  isEnabled: PropTypes.bool.isRequired, // Состояние кнопки
  onChange: PropTypes.func.isRequired, // Колбэк для изменения состояния
  customClass: PropTypes.string, // Дополнительные кастомные классы
};

export default SwitchButton;
