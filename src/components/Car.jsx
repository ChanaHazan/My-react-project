import React from 'react'
import CarMode from './CarMode'

const Car = ({name,model,color,year}) => {
  return (
    <>
    <h1>Car:</h1>
    <p>name:{name}</p>
    <p>model:{model}</p>
    <p>color:{color}</p>
    <p>year:{year}</p>
    <CarMode/>
    </>
  )
}

export default Car