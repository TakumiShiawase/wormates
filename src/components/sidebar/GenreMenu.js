import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'; // Для анимаций
import { ReactComponent as Adventure } from '../../assets/icon/advencure.svg';
import { ReactComponent as Detective } from '../../assets/icon/detective.svg';
import { ReactComponent as Fantasy } from '../../assets/icon/fantasy.svg';
import { ReactComponent as Horror } from '../../assets/icon/horror.svg';
import { ReactComponent as Romance } from '../../assets/icon/romance.svg';
import { ReactComponent as Sci } from '../../assets/icon/sci.svg';
import { ReactComponent as All } from '../../assets/icon/all.svg';
import { ReactComponent as ArrowDown } from '../../assets/icon/arrow_down.svg'; // Стрелка вниз
import { ReactComponent as ArrowUp } from '../../assets/icon/arrow_up.svg'; // Стрелка вверх
import styles from './GenreMenu.module.scss';

const GenreMenu = ({ onGenreClick = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false); // Состояние для открытия/закрытия меню

  const genres = [
    { name: 'Adventure', icon: <Adventure /> },
    { name: 'Detective', icon: <Detective /> },
    { name: 'Fantasy', icon: <Fantasy /> },
    { name: 'Horror', icon: <Horror /> },
    { name: 'Romance', icon: <Romance /> },
    { name: 'Sci-Fi', icon: <Sci /> },
    { name: 'All Genres', icon: <All /> },
  ];

  const toggleMenu = () => {
    // Если меню уже раскрыто, сразу скрываем жанры
    if (isOpen) {
      setIsOpen(false);
      return;
    }

    // Когда кнопка опустится, открываем меню
    setTimeout(() => {
      setIsOpen(true);
    }, 100); // 300мс - время анимации кнопки
  };

  return (
    <div className={styles.container}>
      {/* Анимированный список жанров */}
      <motion.ul
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="genre-list">
        {isOpen &&
          genres.map(({ name, icon }) => (
            <li key={name} className={styles.button} onClick={() => onGenreClick(name)}>
              <span className={styles.button_icon}>{icon}</span>
              {name}
            </li>
          ))}
      </motion.ul>

      {/* Кнопка для открытия/закрытия меню */}
      <motion.button
        onClick={toggleMenu}
        className={`${styles.arrow_button}`}
        initial={{ y: 0 }}
        transition={{ duration: 0.2 }}>
        {/* Иконка стрелки, меняющаяся в зависимости от состояния */}
        {isOpen ? (
          <ArrowUp className={styles.button_icon} />
        ) : (
          <ArrowDown className={styles.button_icon} />
        )}
      </motion.button>
    </div>
  );
};

GenreMenu.propTypes = {
  className: PropTypes.string,
  onGenreClick: PropTypes.func,
};

export default GenreMenu;
