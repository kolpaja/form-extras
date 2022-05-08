import React from 'react';

const StepperControl = ({ currentStep, steps, handleClick }) => {
  return (
    <div className='container mt-4 mb-8 flex justify-around'>
      {/* back btn */}
      <button
        onClick={() => handleClick('back')}
        className={`'bg-white text-slate-400 py-2 px-4 uppercase rounded-xl cursot-pointer font-semibold border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out' ${
          currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Back
      </button>
      {/* next btn */}
      <button
        onClick={() => handleClick('next')}
        className='bg-green-500 text-white py-2 px-4 uppercase rounded-xl cursot-pointer font-semibold hover:bg-green-700 transition duration-200 ease-in-out'
      >
        {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
      </button>
    </div>
  );
};

export default StepperControl;
