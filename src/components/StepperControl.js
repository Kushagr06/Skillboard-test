import React from 'react'


const StepperControl = ({handleClick, currentStep, steps}) => {
  // const [word, setWord] = useState("Get Started");

  const displayButton=(currentStep)=>{
    switch(currentStep){
      case 1:
        return "Get Started"
      case steps.length-2:
         return "Submit"
      case steps.length-1:
        return "Submitted"
      default:
        return "Next"
    }
  }

  return (
    <div className='container flex justify-center mt-2 mb-4 '>
      
      {currentStep!==1?<button 
      onClick={()=> handleClick("back")}
      className={`bg-white text-slate-800  py-3 px-8 rounded-3xl font-semibold cursor-pointer border-2 border-slate-800 mr-2.5 `}>
       Back 
      </button>: ''}

      <button
      onClick={()=>handleClick("next")} className={`bg-green-400 text-white  py-3 px-8 rounded-3xl cursor-pointer ml-2.5`}>
       {displayButton(currentStep)}
      </button>
    
    </div>
  )
}

export default StepperControl
