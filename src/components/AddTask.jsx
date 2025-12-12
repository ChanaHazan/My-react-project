import React from 'react'
import { useState } from 'react'
import Form from './Form'
import Tasks from './Tasks'

const AddTask = () => {

  const [input,setInput]=useState(false)  

  const handleCreateTask=()=>{
    setInput(!input)
  }

  return (
    <>
    {input && <Form/> || <><button onClick={handleCreateTask}>create task</button><Tasks input={input}/></>}
    </>
  )
}

export default AddTask