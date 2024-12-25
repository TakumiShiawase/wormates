import React, { useState } from 'react';
import StepOne from '../../components/register/StepOne.js';
import StepTwo from '../../components/register/StepTwo.js';
import StepThree from '../../components/register/StepThree.js';
import styles from './Register.module.scss';
import { ReactComponent as Logo } from '../../assets/icon/logo.svg';

const RegistrationPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const goToVerificationStep = () => {
    setCurrentStep(3);
  };

  const goToNextStep = () => {
    setCurrentStep(2);
  };

  const goToPreviousStep = () => {
    setCurrentStep(1);
  };

  return (
    <div className={styles.register}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        {currentStep === 1 && <StepOne goToNextStep={goToNextStep} />}
        {currentStep === 2 && (
          <div>
            <StepTwo
              goToPreviousStep={goToPreviousStep}
              goToVerificationStep={goToVerificationStep}
            />
          </div>
        )}
        {currentStep === 3 && <StepThree goToNextStep={goToNextStep} />}
      </div>
    </div>
  );
};

export default RegistrationPage;
