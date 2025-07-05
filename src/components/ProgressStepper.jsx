import React from 'react';
import  { Check } from 'lucide-react';

const ProgressStepper = ({ currentStep }) => {
  const totalSteps = 4;

  return (
    <div className="flex justify-center mb-10 items-center space-x-2">
      {[...Array(totalSteps)].map((_, index) => {
        const step = index + 1;
        const isCompleted = step < currentStep;
        const isActive = step === currentStep;

        return (
          <React.Fragment key={step}>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-base
              ${isCompleted ? 'bg-green-600 text-white' : isActive ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'}
              `}
            >
              {isCompleted ? <Check size={20} /> : step}
            </div>
            {step !== totalSteps && (
              <div
                className={`h-1 w-16 rounded ${
                  step < currentStep ? 'bg-green-600' : 'bg-gray-200'
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProgressStepper;
