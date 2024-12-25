import React from 'react';
import PropTypes from 'prop-types';

const SidebarButton = ({
  label,
  isActive,
  onClick,
  id = '',
  className = '',
  classActive = '',
  icon = null,
  iconClass = '',
  type = 'button',
  disabled = false,
}) => {
  return (
    <li className={`${isActive ? `${classActive}` : `${className}`}`} onClick={onClick}>
      {icon && <span className={iconClass}>{icon}</span>}

      {label}
    </li>
  );
};

SidebarButton.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.node, // Иконка может быть любым компонентом (например, SVG)
  iconClass: PropTypes.string, // Класс для иконки
  type: PropTypes.string, // Тип кнопки
  disabled: PropTypes.bool, // Доступность кнопки
};

SidebarButton.defaultProps = {
  isActive: false,
  onClick: () => {},
  className: '',
  icon: null,
  iconClass: '',
  type: 'button',
  disabled: false,
};

export default SidebarButton;
