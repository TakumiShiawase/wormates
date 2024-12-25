import { useState, useEffect } from 'react';

/**
 * @param {any} value - Значение, которое нужно обрабатывать.
 * @param {number} delay - Задержка в миллисекундах.
 * @returns {any} - Debounced значение.
 */
export const useDebounced = (value, delay) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounced;
};
