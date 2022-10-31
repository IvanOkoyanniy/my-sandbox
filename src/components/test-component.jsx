import React from 'react';
import { useStep } from './test-component.hook';
import { STEPS } from './test-component.constants';
import './test-component.css';

const Wizard = ({ steps }) => {
  const { step, setNextstep, resetStep, setPrevStep } = useStep();

  const stepCard = React.createElement(steps[step]);

  const handleCick = () => {
    if (step + 1 === steps.length) resetStep();
  };

  return (
    <div className='steps-container'>
      <div onClick={handleCick}>{stepCard}</div>

      {step + 1 < steps.length && (
        <>
          <button children='Go to next step' onClick={setNextstep} />
          <button children='Go to prev step' onClick={setPrevStep} />
          <button children='Reset' onClick={resetStep} />
        </>
      )}
    </div>
  );
};

export const Client = () => {
  return <Wizard steps={STEPS} />;
};
