// src/App.js
import React from 'react';
import Music from './components/Music/Music';
import Calendar from './components/Calendar/Calendar';
import Task from './components/Task/Task';
import Note from './components/Note/Note';
import Tracker from './components/Calculator/Calculator';
import Timer from './Timer/Timer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1 className='title'>Simply Focus</h1>
      <div className="grid">
        <Music title="Music" content="Content for card A" />
        <Calendar title="Calendar" content="Content for card B" />
        <Task title="Task" content="Content for card C" />
        <Timer title="Timer" content="Content for card D" />
        <Tracker title="Tracker" content="Content for card E" />
        <Note title="Note"/>
      </div>
    </div>
  );
};

export default App;
