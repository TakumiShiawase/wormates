import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserAction } from '../../redux/register/registerActions';
import Input from '../LogInput/LogInput';
import styles from './StepTwo.module.scss';
import Button from '../LogInput/LogButton';

const StepTwo = ({ goToPreviousStep, goToVerificationStep }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
  });

  const dispatch = useDispatch();
  const stepOneData = useSelector((state) => state.register.stepOneData); // Данные с первого этапа

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (formData.password !== formData.password2) {
      console.error('Пароли не совпадают');
      return;
    }

    const dataToSubmit = {
      ...stepOneData, // Объединяем данные с первого шага
      email: formData.email,
      password: formData.password,
      password2: formData.password2,
    };

    try {
      const response = await dispatch(registerUserAction(dataToSubmit)); // Ждем ответа от сервера
      if (
        response.status ===
        'Пользователь успешно зарегистрирован. Пожалуйста, подтвердите свой email.'
      ) {
        // Проверяем, что статус ответа 200
        goToVerificationStep(); // Переходим на шаг верификации
      } else {
        console.error('Ошибка регистрации: неправильный ответ от сервера', response);
      }
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.create_view}>Create a Wormates Account</div>
      <div className={styles.basic}>Basic information</div>
      <div className={styles.view}>Email</div>
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        customClass={styles.input}
      />
      <div className={styles.view}>Password</div>
      <Input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Password"
        customClass={styles.input}
      />
      <Input
        type="password"
        name="password2"
        value={formData.password2}
        onChange={handleInputChange}
        placeholder="Repeat Password"
        customClass={styles.input}
      />
      <div className={styles.button_container}>
        <Button customClass={styles.button} text="Back" onClick={goToPreviousStep} />
        <Button customClass={styles.button} text="Next" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default StepTwo;
