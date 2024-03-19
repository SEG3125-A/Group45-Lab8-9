import React, { useState } from 'react';
import "./Task.css";

const Task = ({ title, content }) => {
  const [newTaskInput, setNewTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const newTask = () => {
    setTasks([...tasks, { name: newTaskInput, checked: false }]);
    setNewTaskInput('');
  }

  const inputChange = (event) => {
    setNewTaskInput(event.target.value);
  }

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].checked = !newTasks[index].checked;
    setTasks(newTasks);
  }

  return (
    <div className="card">
      <h2>{title}</h2>
      <div>
        {tasks.map((task, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={index}
              checked={task.checked}
              onChange={() => toggleTask(index)}
            />
            <label className={task.checked ? 'checked' : ''}>{task.name}</label>
          </div>
        ))}
      </div>
      
      <input type="text" placeholder="New Task" value={newTaskInput} onChange={inputChange}/>
      <button id="addTaskBtn" onClick={newTask}>Add Task</button>
    </div>
  );
};

export default Task;
