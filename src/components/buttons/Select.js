import React from 'react';
import PropTypes from 'prop-types';

const CustomSelect = ({
  options,
  name,
  value,
  onChange,
  placeholder,
  customClass = '',
  placeholderClass = '',
  selectClass = '',
  optionClass = '',
}) => {
  return (
    <div className={`${customClass}`}>
      <select className={`${selectClass}`} name={name} value={value} onChange={onChange}>
        {placeholder && (
          <option value="" disabled className={`${placeholderClass}`}>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option className={`${optionClass}`} key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  customClass: PropTypes.string,
  customStyle: PropTypes.object,
  selectClass: PropTypes.string,
};

export default CustomSelect;
