import React, {useState} from 'react'
import Stepper from './Stepper'
import StepperControl from './StepperControl'
import Account from './steps/Account'
import Details from './steps/Details'
import Final from './steps/Final'

export default function Form() {
  const steps=[
    1,2,3
  ];
  
  const [currentStep, setCurrentStep] = useState(1)

  const displaySteps=(step)=>{
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

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      <div className='container horizontal mt-5'>
      < Stepper  steps={steps} currentStep={currentStep}/>
      </div>
      <StepperControl />
    </div>
  )
}
