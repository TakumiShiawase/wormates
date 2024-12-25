import React from 'react';

const ButtonHistory = ({
  text = '',
  onClick,
  isActive,
  type = '',
  customClass = '',
  classActive = '',
  disabled = false,
  icon = null,
  iconClass = '',
}) => {
  return (
    <button
      type={type}
      className={`${isActive ? `${classActive}` : `${customClass}`}`}
      onClick={onClick}
      disabled={disabled}>
      {text}
      {icon && <span className={iconClass}>{icon}</span>}
    </button>
  );
};

export default ButtonHistory;
