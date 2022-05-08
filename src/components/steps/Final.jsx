import React, { useContext, useEffect } from 'react';
import okIcon from '../../assets/icons/ok-icon.svg';
import StepperContext from '../../context/StepperContext';

const Final = ({ resetForm }) => {
  const { userData, setFinalData, finalData } = useContext(StepperContext);
  useEffect(() => {
    setFinalData(userData);
  }, [userData]);
  return (
    <div className='container flex flex-col justify-center items-center p-12'>
      <img src={okIcon} alt='ok tick icon' />
      <h1 className='text-center text-xl font-bold mb-2'>
        Thank you for your submission!
      </h1>
      <p className='text-center text-lg mb-2'>Your account has been created.</p>
      <button
        onClick={resetForm}
        className='bg-transparent hover:bg-blue-500 text-blue-700 font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
      >
        Close
      </button>
    </div>
  );
};

export default Final;
