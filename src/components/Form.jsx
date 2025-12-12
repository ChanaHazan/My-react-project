import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Form = () => {

    const [taskId,setTaskId]=useState("")

    const [taskName,setTaskName]=useState("")

    // const[task,setTask]=useState(false)

    const handleIdChange=(e)=>{
        setTaskId(e.target.value)
    }

    const handleNameChange=(e)=>{
        setTaskName(e.target.value)
    }

    const handleSubmit = (e) => {
        // setTask(!task)
        e.preventDefault()
        const newTask={taskId: uuidv4(),taskName: taskName}

    }

 

    return (
        <>
            <h1>hello form</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder='enter task id' onChange={handleIdChange}/>
                <input placeholder='enter task name' onChange={handleNameChange}/>
                <button type='submit' >add task</button>
            </form>
        </>
    )
}

export default Form