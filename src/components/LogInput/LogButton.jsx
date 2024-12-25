import React from 'react';

const Button = ({
  text = '',
  onClick,
  type = '',
  customClass = '',
  disabled = false,
  icon = null,
  iconClass = '',
  imgClass = '',
  img = null,
  alt = '', // Новый проп для alt
}) => {
  return (
    <button type={type} className={customClass} onClick={onClick} disabled={disabled}>
      {icon && <span className={iconClass}>{icon}</span>}
      {img && (
        <img src={img} alt={alt || 'Button icon'} className={imgClass}>
          {icon}
        </img>
      )}
      {text}
    </button>
  );
};

export default Button;
