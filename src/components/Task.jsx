import React from 'react'

const Task = ({task, setTasks}) => {
    const { taskId, taskTitle, taskDescription, createdTime, isCompleted } = task;

    const handleCompletedTask = () => {
        setTasks((prevList) =>
            prevList.map((item) =>
                item.taskId === taskId ? { ...item, isCompleted: true } : item
            )
        );
    }

    return (
        <div style={isCompleted ? { textDecoration: "line-through" } : { textDecoration: "none" }}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={handleCompletedTask}
                />
                <h3>{taskTitle}</h3>
            </div>

            <p>description: {taskDescription}</p>
            <p>created at: {createdTime.toLocaleTimeString()}</p>
        </div>
    )
}

export default Task