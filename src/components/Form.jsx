import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Form = ({setInput,setTasks}) => {

    const [taskDescription,setTaskDescription]=useState("")

    const [taskTitle,setTaskTitle]=useState("")

    const handleTitle=(e)=>{
        setTaskTitle(e.target.value)
    }

    const handleDescription=(e)=>{
        setTaskDescription(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask={
            taskId: uuidv4(),
            taskTitle: taskTitle,
            taskDescription:taskDescription,
            createdTime: new Date(Date.now()),
            isCompleted: false
         }
        setTasks((prev)=>[...prev,newTask])
        setInput(false)
    }

 

    return (
        <>
            <h1>hello form</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Enter Task Title" onChange={handleTitle}/>
                <input placeholder="Enter Task Description" onChange={handleDescription}/>
                <button type='submit' >add task</button>
            </form>
        </>
    )
}

export default Form