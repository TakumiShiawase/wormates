import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDebounced } from '../../hooks/useDebounce';
import { ReactComponent as SearchIcon } from '../../assets/icon/search.svg';

/**
 * Универсальный компонент поиска.
 * @param {Function} onSearch - Callback-функция, вызывается при изменении строки поиска.
 * @param {string} placeholder - Текст-плейсхолдер для input.
 * @param {number} debounceDelay - Задержка для debounce.
 * @param {string} inputClassName - Дополнительные стили для input.
 * @param {string} containerClassName - Дополнительные стили для контейнера.
 * @param {object} iconStyle - Стили для иконки, передаваемые снаружи.
 */
const Search = ({
  onSearch,
  placeholder = 'Search',
  debounceDelay = 500,
  inputClassName = '',
  containerClassName = '',
  iconStyle = {},
}) => {
  const [query, setQuery] = useState('');

  // Используем кастомный хук для debounce
  const debouncedQuery = useDebounced(query, debounceDelay);

  // Вызываем onSearch при изменении debouncedQuery
  React.useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className={`${containerClassName}`}>
      <input
        type="text"
        className={`${inputClassName}`}
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <SearchIcon style={{ ...iconStyle }} />
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  debounceDelay: PropTypes.number,
  inputClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  iconStyle: PropTypes.object,
};

export default Search;
