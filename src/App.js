import { useState } from 'react';
import StepperContext from './context/StepperContext'

import Stepper from './components/Stepper.jsx'
import StepperControl from './components/StepperControl.jsx';
import AccountInfo from './components/steps/AccountInfo.jsx';
import PersonalDetails from './components/steps/PersonalDetails.jsx';
import Final from './components/steps/Final';

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useState('')
  const [finalData, setFinalData] = useState(null)

  const steps = [
    'Account Information',
    'Personal Details',
    'Final'
  ];

  const resetForm = () => {
    setUserData('');
    setFinalData(null)
    setCurrentStep(1)
  }

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <AccountInfo />
      case 2:
        return <PersonalDetails />
      case 3:
        return <Final resetForm={resetForm} />
      default:
        break;
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === 'next' ? newStep++ : newStep--
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
  }

  return (
    <div className="md:w-1/2  mx-auto shadow-xl rounded-3xl pb-2 bg-white">
      {/* stepper comp */}
      <div className='container horizontal mt-5'>
        <Stepper currentStep={currentStep} steps={steps} />

        {/* display the steps */}
        <div className='p-10 my-4'>
          <StepperContext.Provider value={{
            step: currentStep,
            userData,
            setUserData,
            finalData,
            setFinalData
          }}>
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>
      {/* navigation controller */}
      {currentStep !== steps.length && <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />}
    </div>
  );
}

export default App;
