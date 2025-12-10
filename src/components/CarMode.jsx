import React from 'react'

const CarMode = ({mode,km,setMode,setKm}) => {

  const handleKm=(e)=>{
    setKm(e.target.value)
  }

  const handleChangeMode=()=>{
    setMode(!mode)
  }


  return (
    <>
    {mode && <><h2>mode: drive</h2><h3>km:{km}</h3><input type='number' onChange={handleKm}/></> || <h2>mode: stopped</h2>}
    <button onClick={handleChangeMode}>{mode && <p>stop</p> || <p>drive</p>}</button>
    </>
  )
}

export default CarMode