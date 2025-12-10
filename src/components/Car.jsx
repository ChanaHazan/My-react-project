import React, { useState } from 'react'
import CarMode from './CarMode'

const Car = ({ car }) => {

    const [mode, setMode] = useState(false)

    const [km, setKm] = useState(0)

    return (
        <>
            <h2>name: {car.name}</h2>
            <h2>model: {car.model}</h2>
            <h2>color: {car.color}</h2>
            <CarMode mode={mode} km={km} setMode={setMode} setKm={setKm}/>
        </>
    )
}

export default Car