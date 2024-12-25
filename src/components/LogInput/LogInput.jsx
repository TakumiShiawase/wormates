import React from 'react';

const LogInput = ({
  name = '',
  type = 'text',
  placeholder = '',
  value,
  onChange,
  customClass = '',
  maxlength,
}) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={customClass}
      maxlength={maxlength}
    />
  );
};

export default LogInput;
