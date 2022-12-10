import React,{useContext} from 'react'
import { StepperContext } from '../context/StepperContext'


export default function Final() {
  const{userData, setUserData}=useContext(StepperContext)
const handleChange=(e)=>{
  const {name, value}= e.target
  setUserData({...userData, [name]:value})
  
}

  return (
  

    <div>
    <div className='text-2xl font-serif pb-10 text-center'> 
    More about you
    </div>
    <div>
      <div className='text-left h-6 mt-3 text-gray-400 text-xl leading-8 pb-10'>
        English proficiency
      </div>
      <select id="countries" className=" border border-gray-300 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Select...</option>
  <option value="n">Native</option>
  <option value="C">Advanced C1/C2</option>
  <option value="B">Intermediate B1/B2</option>
  <option value="A">Begineer A1/A2</option>
</select>
      
     
      <div className='text-left h-6 mt-3 text-gray-400 text-xl leading-8 pb-10'>
        Total years of work experience
      </div>
      <select id="countries" className=" border border-gray-300 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Select...</option>
  <option value="03">0-3 yrs professional experience</option>
  <option value="38">3-8 yrs professional experience</option>
  <option value="812">8-12 yrs professional experience</option>
  <option value="12">12+ yrs professional experience</option>
</select>
      <div className='text-left h-6 mt-3 text-gray-400 text-xl leading-8 pb-10'>
        How did you hear about us? (optional)
      </div>
      <select id="countries" className=" border border-gray-300 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Select...</option>
  <option value="jp">Job Posts</option>
  <option value="sm">Social Media</option>
  <option value="se">Search Engine</option>
  <option value="add">Advertising</option>
</select>

      <div className='text-left h-6 mt-3 text-gray-400 text-xl leading-8'>
        Upload your resume
      </div>
      <div className='text-left text-orange-300 text-sm leading-8'>
       Only PDF files are accepted
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
          onChange={handleChange}
          value={userData["firstname"] || " "}
          name="firstname"
          placeholder="Click to add File"
          className='p-1 px-2 appearance-none outline-none w-full text-gray-800' 
          />
        </div>
        </div>
        </div>
    )
  
  
}
