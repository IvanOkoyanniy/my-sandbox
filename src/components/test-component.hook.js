import { useState } from 'react';

const initialState = 0;

export const useStep = () => {
  const [step, setStep] = useState(initialState);

  const setNextstep = () => {
    setStep(prev => prev + 1);
  };
  const setPrevStep = () => {
    if (step === 0) return;
    setStep(prev => prev - 1);
  };
  const resetStep = () => {
    setStep(initialState);
  };

  return { step, setNextstep, setPrevStep, resetStep };
};
