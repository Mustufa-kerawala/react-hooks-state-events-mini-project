import React, { useEffect, useState } from "react";
import Task from "./Task";


function TaskList({ tasksData }) {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData);
  }, [tasksData]);

  

  const removeTask = (taskText) => {
    const newTasks = tasks.filter((task) => task.text !== taskText);
    setTasks(newTasks);
  }
  


  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) => (
        
        <Task key={task.text} text={task.text} category={task.category} removeTask={removeTask}  />
      ))}
    </div>
  );
}

export default TaskList;
