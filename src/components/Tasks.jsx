import React from 'react'
import { useState } from 'react'

const Tasks = ({input}) => {

  const [tasks,setTasks]=useState([])

  
  return (
    <>
    <h1>ToDo List</h1>
    {input && tasks.map(task=><>
    <input type='checkbox'/>
    </>)}
    </>
  )
}

export default Tasks