import React, { useState, useEffect, useRef } from 'react';

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps?.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          isCompleted: false,
          isHighlighted: true,
          isSelected: true,
        };
        count++;
      }
      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          isCompleted: true,
          isSelected: true,
          isHighlighted: false,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          isCompleted: false,
          isSelected: false,
          isHighlighted: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    //create an object with all the steps and the first one is highlighted and selected
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          isCompleted: false,
          isSelected: index === 0 ? true : false,
          isHighlighted: index === 0 ? true : false,
        }
      )
    );
    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? 'w-full flex items-center'
            : 'flex items-center'
        }
      >
        <div className='relative flex flex-col items-center text-teal-600'>
          <div
            className={`rounded-full text-teal-600 transition duration-400 ease-in-out 
            border-2 h-12 w-12 py-3 flex justify-center items-center 
            ${
              step.isHighlighted
                ? 'border-green-300 border-4 font-bold'
                : 'border-gray-300'
            }
            ${
              step.isCompleted &&
              'bg-green-500 text-white font-bold border border-green-500'
            }`}
          >
            {step?.isCompleted ? (
              <span className='text-white font-bold text-xl'>&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          <p
            className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${
              step.isHighlighted ? 'text-gray-900' : 'text-gray-400'
            }`}
          >
            {step.description}
          </p>
        </div>
        <span
          className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
            step.isCompleted ? 'border-green-600' : 'border-gray-300'
          }`}
        >
          {/* line */}
        </span>
      </div>
    );
  });

  return (
    <section className='mx-4 p-4 flex justify-between items-center'>
      {displaySteps}
    </section>
  );
};

export default Stepper;
