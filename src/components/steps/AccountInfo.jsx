import { useContext } from 'react';
import StepperContext from '../../context/StepperContext';

const AccountInfo = () => {
  const { userData, setUserData, step } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div className='container flex flex-col'>
      <label
        hmtlfor='account'
        className='form-label inline-block mb-2 text-gray-700'
      >
        Account number:
      </label>
      <input
        type='text'
        id='account'
        name='account'
        value={userData['account'] || ''}
        onChange={handleChange}
        placeholder='Enter your account number'
        className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mb-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        '
      />
      <label
        hmtlfor='password'
        className='form-label inline-block mb-2 text-gray-700'
      >
        Password:
      </label>
      <input
        type='password'
        id='password'
        name='password'
        value={userData['password'] || ''}
        onChange={handleChange}
        placeholder='Password'
        className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mb-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        '
      />
    </div>
  );
};

export default AccountInfo;
