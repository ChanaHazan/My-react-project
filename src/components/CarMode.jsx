import React, { useState } from 'react'

const CarMode = () => {

  const [mode,setMode]=useState(true)
  const [speed,setSpeed]=useState(0)
  const handleChangeMode=()=>{
    setMode(!mode)
  }

  const handleSpeed=(e)=>{
    setSpeed(e.target.value)
  }

  return (
    <>
    {mode ? <><p>speed:{speed} km/h</p><input onChange={handleSpeed} type='number'/></> : <p>stopped</p>}
    <button onClick={handleChangeMode}>Set Car Moving</button>
    </>
  )
}

export default CarMode