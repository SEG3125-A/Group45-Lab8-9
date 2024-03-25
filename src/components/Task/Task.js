import React, { useState } from 'react';
import "./Task.css";

const Task = ({ title, content, lang }) => {
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
      <h2>{lang === 'English' ? 'Tasks' : 'Tâches'}</h2>
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
      
      <input type="text" placeholder={lang === 'English' ? 'New Task' : 'Nouvelle Tâche'} value={newTaskInput} onChange={inputChange}/>
      <button id="addTaskBtn" onClick={newTask}>{lang === 'English' ? 'Add Task' : 'Ajouter Tâche'}</button>
    </div>
  );
};

export default Task;
