import React,{useContext} from 'react'
import { StepperContext } from '../context/StepperContext'

export default function Account() {const{userData, setUserData}=useContext(StepperContext)

const handleChange=(e)=>{
  const {name, value}= e.target
  setUserData({...userData, [name]:value})
}
  return (

    <div>Account</div>
  )
}
