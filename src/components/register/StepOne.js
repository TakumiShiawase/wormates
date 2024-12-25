import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStepOneData } from '../../redux/register/registerActions';
import Select from '../buttons/Select';
import Input from '../LogInput/LogInput';
import styles from './StepOne.module.scss';
import Button from '../LogInput/LogButton';

const StepOne = ({ goToNextStep }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    dob_month: '',
    dob_year: '',
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const months = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];

  const handleNext = () => {
    dispatch(setStepOneData(formData)); // Сохраняем данные первого этапа
    goToNextStep(); // Переход на второй этап
  };

  return (
    <div className={styles.container}>
      <div className={styles.create_view}>Create a Wormates Account</div>
      <div className={styles.basic}>Basic information</div>
      <Input
        type="text"
        name="first_name"
        value={formData.first_name}
        onChange={handleInputChange}
        placeholder="First name"
        customClass={styles.input}
      />
      <Input
        type="text"
        name="last_name"
        value={formData.last_name}
        onChange={handleInputChange}
        placeholder="Last name (optional)"
        customClass={styles.input}
      />
      <div className={styles.dob_view}>Date of birth</div>
      <div className={styles.dob_container}>
        <Select
          options={months}
          name="dob_month"
          value={formData.dob_month}
          onChange={handleInputChange}
          placeholder="Month"
          customClass={styles.select_container} // Передаём кастомный класс
          selectClass={styles.select} // Класс для <select>
          placeholderClass={styles.select_placeholder}
          optionClass={styles.select_option}
        />
        <Input
          type="number"
          name="dob_year"
          value={formData.dob_year}
          onChange={handleInputChange}
          placeholder="Year"
          customClass={styles.year_input}
          maxlength={4}
        />
      </div>
      <Button text="Next" customClass={styles.button} onClick={handleNext} />
    </div>
  );
};

export default StepOne;
