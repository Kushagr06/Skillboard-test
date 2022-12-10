import React,{useEffect,useState,useRef} from 'react'



const Stepper = ({steps,currentStep}) => {
  const [newStep, setNewStep]=useState([]);
 const  stepRef=useRef(); 

 const updateStep=(stepNumber, steps)=>{
  const newSteps= [...steps]
  let count=0;

  while(count< newSteps.length){
    //current step
    if(count=== stepNumber){
      newSteps[count]={
        ...newSteps[count],
        highligd:true,
        selected:true,
        completed:true,
      }
      count++;
    } 
    // step completed
    else if(count< stepNumber){
      newSteps[count]={
        ...newSteps[count],
        highligd:false,
        selected:true,
        completed:true,
      }
      count++;
    }
    //step pending
    else{
      newSteps[count]={
        ...newSteps[count],
        highligd:false,
        selected:false,
        completed:false,
      }
      count++;
    }
  }

  return newSteps;
 }


  useEffect(() => {
    const stepState=steps.map((step,index)=>
    Object.assign(
      {},
      {
        description:step,
        completed: false,
        highlighted: index===0? true:false,
        selected: index===0? true:false,
      }
    )
    );


    stepRef.current=stepState;
    const current=updateStep(currentStep-1, stepRef.current);
   setNewStep(current);
  }, [steps, currentStep])

  const displaySteps= newStep.map((step,index)=>{
return (
  <div  key={index}
  className={
    index!== newStep.length-1?"w-full flex items-center":"flex items-right"}>
  
  
  <div className='relative flex flex-col items-center'>
  <div className='border-1 border-gray-300 h-3 w-3 flex items-center justify-center'>
                
  </div>
  {/* <div className='absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase'>
    fff
  </div> */}
</div>
<div className={`flex-auto border-t-4 rounded-3xl transition duration-100 ease-in-out ${step.completed? `border-green-600`:`border-gray`}`}>   
</div>

</div>
)
  })


  return (
    <div className='mx-4 p-4 flex justify between items-center'>
    {displaySteps}
    </div>
  )
}

export default Stepper
