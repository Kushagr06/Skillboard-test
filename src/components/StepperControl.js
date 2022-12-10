import React from 'react'

const StepperControl = ({handleClick, currentStep, steps}) => {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
      
      {currentStep!==1?<button 
      onClick={()=> handleClick("back")}
      className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition-200  ease-in-out`}>
       Back 
      </button>: ''}

      <button
      onClick={()=>handleClick("next")} className={`bg-green-800 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer  hover:bg-slate-700 hover:text-white transition-200 ease-in-out${currentStep===1? `flex flex-col items-center`: `` }`}>
       {currentStep===steps.length-1? "Submit":"Next"} 
      </button>
    
    </div>
  )
}

export default StepperControl
