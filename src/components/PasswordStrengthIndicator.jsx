import React, { useState } from 'react'

const PasswordStrengthIndicator = () => {

  const[password,setPassword]=useState("")  

  const handlePassChange=(e)=>{
    if(e.target.value.length<6)
        setPassword("סיסמה חלשה")
    else if(e.target.value.length<10)
        setPassword("סיסמה בינונית")
    else
        setPassword("סיסמה חזקה")
  }

  return (
    <>
    <h2>הכנס סיסמה חדשה:</h2>
    <input placeholder='password' onChange={handlePassChange}/>
    <h3>Is this a strong password?{password}</h3>
    </>
  )
}

export default PasswordStrengthIndicator