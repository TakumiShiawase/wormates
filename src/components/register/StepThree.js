import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Импортируем useDispatch
import Input from '../LogInput/LogInput';
import Button from '../LogInput/LogButton';
import styles from './StepThree.module.scss';
import { verifyCodeAction } from '../../redux/register/registerActions';
import { useNavigate } from 'react-router-dom';

const StepThree = ({ goToNextStep }) => {
  const [verification_сode, setVerificationCode] = useState(''); // Локальное состояние для кода
  const dispatch = useDispatch(); // Хук для доступа к dispatch
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setVerificationCode(e.target.value); // Обновляем код при изменении
  };

  const handleVerificationSubmit = () => {
    // Отправляем код для верификации
    if (verification_сode.length !== 4) {
      console.error('Verification code must be 4 digits');
      return;
    }

    dispatch(verifyCodeAction(verification_сode)) // Теперь отправляем локальное состояние
      .then((response) => {
        // Если успешная верификация
        console.log('Verification successful', response);
        navigate('/');
      })
      .catch((error) => {
        // Обработка ошибки
        console.error('Verification failed', error);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.code_view}>
        We have sent a four
        <br />
        digit code to your
        <br />
        email
      </div>
      <div className={styles.enter}>Enter code</div>
      <Input
        type="tel"
        name="verificationCode"
        maxlength="4"
        value={verification_сode} // Привязываем инпут к состоянию
        onChange={handleInputChange} // Обработчик для обновления состояния
        customClass={styles.input}
      />
      <div className={styles.button_container}>
        <Button onClick={goToNextStep} customClass={styles.button} text="Back" />
        <Button onClick={handleVerificationSubmit} customClass={styles.button} text="Finish" />
      </div>
    </div>
  );
};

export default StepThree;
