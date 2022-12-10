import React from 'react'





const StepperControl = ({handleClick, currentStep, steps}) => {
  // const [word, setWord] = useState("Get Started");

  const displayButton=(currentStep)=>{
    switch(currentStep){
      case 1:
        return "Get Started"
      case steps.length-1:
         return "Submit"
      default:
        return "Next"
    }
  }

  return (
    <div className='container flex justify-around mt-4 mb-8'>
      
      {currentStep!==1?<button 
      onClick={()=> handleClick("back")}
      className={`bg-white text-slate-800  py-3 px-8 rounded-3xl font-semibold cursor-pointer border-2 border-slate-800`}>
       Back 
      </button>: ''}

      <button
      onClick={()=>handleClick("next")} className={`bg-green-400 text-white  py-3 px-8 rounded-3xl cursor-pointer ${currentStep===1? `flex flex-col items-center`: `` }`}>
       {displayButton(currentStep)}
      </button>
    
    </div>
  )
}

export default StepperControl
