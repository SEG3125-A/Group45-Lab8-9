import React, { useState } from 'react';
import './Timer.css';

const Timer = ({ title, content }) => {
  const [sessionStarted, setSessionStarted] = useState(false);
  const [studyTime, setStudyTime] = useState("");

  const startSession = () => {
    setSessionStarted(true);
  };

  const changeStudyTime = (event) => {
    setStudyTime(event.target.value);
  };

  const renderTimer = () => {
    if (sessionStarted) {
      return (
        <div className='timer'>
          {studyTime}
        </div>
      );
    } else {
      return (
        <div className='study-session-1'>
          <h1>Study Session</h1>
          <br></br>
          <label className="study-session-labels">Study Time</label>
          <select id="study-time" value={studyTime} onChange={changeStudyTime}>
            <option value="25:00">25:00</option>
            <option value="30:00">30:00</option>
            <option value="35:00">35:00</option>
            <option value="40:00">40:00</option>
            <option value="45:00">45:00</option>
          </select><br />
          <label className="study-session-labels">Break Time</label>
          <select>
            <option value="5:00">5:00</option>
            <option value="10:00">10:00</option>
            <option value="15:00">15:00</option>
            <option value="20:00">20:00</option>
            <option value="25:00">25:00</option>
          </select><br />

          <label className="study-session-labels">Round</label>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select><br />
          <button onClick={startSession} id="start-session">Start Session</button>
        </div>
      );
    }
  };

  return (
    <div className='card'>
      {renderTimer()}
    </div>
  );
};

export default Timer;
