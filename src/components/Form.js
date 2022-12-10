import React, {useState} from 'react'
import Stepper from './Stepper'
import StepperControl from './StepperControl'
import { StepperContext } from './context/StepperContext'
import Account from './steps/Account'
import Details from './steps/Details'
import Final from './steps/Final'

export default function Form() {
  const steps=[
    1,2,3
  ];
  
  const [currentStep, setCurrentStep] = useState(1);
 const[userData, setUserData]= useState('');
 const [finalData, setFinalData]= useState([]);

  const displayStep=(step)=>{
    switch(step){
      case 1:
        return <Account />
      case 2:
         return <Details />
      case 3:
         return <Final />
      default:
    }
  }
 const handleClick=(direction)=>{
 let newStep=currentStep;
  direction==="next"?newStep++: newStep--

  newStep > 0 && newStep< steps.length && setCurrentStep(newStep);
 }

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      <div className='container horizontal mt-5'>
      < Stepper  steps={steps} currentStep={currentStep}/>
      <div className='my-10 p-10'>
        <StepperContext.Provider value ={{
          userData,
          setUserData,
          finalData,
          setFinalData
        }}>
          {displayStep(currentStep)}
        </StepperContext.Provider>
      </div>
      </div>
      <StepperControl
      handleClick={handleClick}
      currentStep={currentStep}
      steps={steps} />
    </div>
  )
}
