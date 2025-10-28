import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState("")

    const [phone, setPhone] = useState("")

    const [email, setEmail] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    return (
        <>
            <input onChange={handleNameChange} placeholder='name:'/>
            <input onChange={handlePhoneChange} placeholder='phone:'/>
            <input onChange={handleEmailChange} placeholder='email:'/>
            <h3>name: {name}</h3>
            <h3>phone: {phone}</h3>
            <h3>email: {email}</h3>
        </>
    )
}

export default Form