import React from 'react'
import { useState } from 'react'
import Form from './Form'
import Tasks from './Tasks'

const AddTask = () => {

  const [tasks,setTasks]=useState([])
  const [input,setInput]=useState(false)  

  return (
    <>
    {input ? 
    (<Form 
     setTasks={setTasks} 
     setInput={setInput}/> 
     ):(
     <><button 
       onClick={()=>setInput(true)}>create task</button>
       <Tasks tasks={tasks} setTasks={setTasks}/></>
    )}
    </>
  )
}

export default AddTask