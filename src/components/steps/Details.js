import React,{useContext} from 'react'
import { StepperContext } from '../context/StepperContext'

export default function Details() {
  const{userData, setUserData}=useContext(StepperContext)
const handleChange=(e)=>{
  const {name, value}= e.target
  setUserData({...userData, [name]:value})
}
return (



    <div>
      <div className='text-2xl font-serif pb-10 text-center'> 
      Select your <span className='text-green-400 italic font-extralight'>pimary</span> skill
      </div>
      <div>
        
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
          onChange={handleChange}
          value={userData["skill"] || " "}
          name="skill"
          placeholder='skill'
          className='  p-1 px-2 appearance-none outline-none w-full text-gray-800' 
          />
        </div>

        <div  className='text-center h-6 mt-3  text-xl leading-8 pb-10 pt-10'>
          Years of experience with this skill
        </div>
        
        <button  className={`bg-transparent py-2 px-4 m-2 border rounded-lg`}>
         less than 1 year
        </button>

        <button  className="bg-transparen  py-2 px-4 m-2 border rounded-lg">
        1-2 years
        </button>

        <button  className="bg-transparen  py-2 px-4 m-2 border rounded-lg">
        3-5 years
        </button>

        <button  className="bg-transparen  py-2 px-4 m-2 border rounded-lg">
        over 10 years
        </button>

      </div>
      </div>
  )
}