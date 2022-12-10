import React,{useContext, useMemo} from 'react'
import { StepperContext } from '../context/StepperContext'
import {  FaUser } from 'react-icons/fa';
import {  GrMail } from 'react-icons/gr';
import {  MdLocationOn } from 'react-icons/md';

import Select from 'react-select'
import countryList from 'react-select-country-list'




export default function Account() {
  const{userData, setUserData}=useContext(StepperContext)
  
  const options= useMemo(()=>countryList().getData(), [])


const handleChange=(e)=>{
  const {name, value}= e.target
  setUserData({...userData, [name]:value})
}
  return (

    <div>
      <div className='text-2xl font-serif pb-10 text-center'> 
      Becoming a <span className='text-green-400 italic font-extralight'>part of our global community</span><br/> has never been easier
      </div>
      <div>
        <div className='text-left h-6 mt-3 text-gray-400 text-xl leading-8 pb-10'>
       First Name 
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
        <FaUser className='mt-2 w-5 opacity-20'/>
          <input
          onChange={handleChange}
          value={userData["firstname"] || " "}
          name="firstname"
          placeholder='Firstname'
          className=' p-1 px-2 appearance-none outline-none w-full text-gray-800' 
          />
        </div>

        <div className='text-left h-6 mt-3 text-gray-400 text-xl leading-8 pb-10'>
          Last name
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
        <FaUser className='mt-2 w-5 opacity-20'/>
          <input
          onChange={handleChange}
          value={userData["lastname"] || " "}
          name="lastname"
          placeholder='Lastname'
          className='p-1 px-2 appearance-none outline-none w-full text-gray-800' 
          />
        </div>

        <div className='text-left h-6 mt-3 text-gray-400 text-xl leading-8 pb-10'>
          Email
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
        <GrMail className='mt-2 w-5 opacity-20'/>
          <input
          onChange={handleChange}
          value={userData["email"] || " "}
          name="email"
          placeholder='Email'
          className='p-1 px-2 appearance-none outline-none w-full text-gray-800' 
          />
        </div>

        <div className='text-left h-6 mt-3 text-gray-400 text-xl leading-8 pb-10'>
          Country
        </div>

  
  <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>       
  <MdLocationOn className='mt-5 w-4 opacity-20'/>        
<Select options={options}  onChange={handleChange}
          value={userData["country"] || " "}
 name="country"
 placeholder=' Select country...'
id="countries" className=" text-left block w-full p-2.5 border border-transparent dark:placeholder-gray-400" />
  


        </div>


      </div>
      </div>
  )
}
