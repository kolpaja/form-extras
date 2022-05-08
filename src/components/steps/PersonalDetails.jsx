import React, { useContext } from 'react';
import StepperContext from '../../context/StepperContext';

const PersonalDetails = () => {
  const { userData, setUserData, step } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div className='container'>
      <label
        htmlFor='firstName'
        className='form-label inline-block mb-2 text-gray-700'
      >
        First name:
      </label>
      <input
        type='text'
        id='firstName'
        name='firstName'
        value={userData['firstName'] || ''}
        onChange={handleChange}
        placeholder='Enter your first name'
        className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mb-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        '
      />
      <label htmlFor='lastName'>Last name:</label>
      <input
        type='text'
        id='lastName'
        name='lastName'
        value={userData['lastName'] || ''}
        onChange={handleChange}
        placeholder='Enter your last name'
        className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mb-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        '
      />
      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        id='email'
        name='email'
        value={userData['email'] || ''}
        onChange={handleChange}
        placeholder='Enter your email'
        className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mb-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        '
      />
    </div>
  );
};

export default PersonalDetails;
