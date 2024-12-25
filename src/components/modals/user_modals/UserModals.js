import PropTypes from 'prop-types';
import styles from './UserModals.module.scss';
import Button from '../../LogInput/LogButton';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../redux/auth/authActions';
import { useDispatch } from 'react-redux';
import { ReactComponent as Avatar } from '../../../assets/icon/avatar.svg';
import { ReactComponent as Setting } from '../../../assets/icon/setting.svg';
import { ReactComponent as Logout } from '../../../assets/icon/logout.svg';

const Modal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); // Закрываем окно, если клик за пределами
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  if (!isOpen) return null;
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.content} ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <Button
          icon={<Avatar />}
          customClass={styles.button}
          iconClass={styles.icon}
          text="Profile"
          onClick={() => navigate('/profile')}
        />

        <Button
          icon={<Setting />}
          customClass={styles.button}
          iconClass={styles.icon}
          text="Settings"
        />
        <Button
          icon={<Logout />}
          customClass={styles.button}
          iconClass={styles.icon}
          text="Sign Out"
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Открыто ли модальное окно
};

export default Modal;
