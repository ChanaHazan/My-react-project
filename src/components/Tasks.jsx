import React from 'react'
import { useState } from 'react'
import Task from './Task';

const Tasks = ({ setTasks, tasks }) => {

  return (
    <>
      <h3>ToDoList</h3>
      {tasks?.map((task) => <>
        <Task
          key={task.taskId}
          task={task}
          setTasks={setTasks}
        />
      </>)}
    </>
  )
}

export default Tasks