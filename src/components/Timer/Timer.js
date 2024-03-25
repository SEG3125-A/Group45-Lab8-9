import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = ({ title, lang }) => {
  const [sessionStarted, setSessionStarted] = useState(false);
  const [studyTime, setStudyTime] = useState(25 * 60); // Initial study time in seconds
  const [breakTime, setBreakTime] = useState(5 * 60); // Initial break time in seconds
  const [round, setRound] = useState(1);
  const [timeLeft, setTimeLeft] = useState(studyTime);

  useEffect(() => {
    if (sessionStarted) {
      const timer = setInterval(() => {
        setTimeLeft(prevTimeLeft => {
          if (prevTimeLeft === 0) {
            clearInterval(timer);
            // Handle switching between study and break time
            if (round % 2 === 0) {
              setRound(prevRound => prevRound + 1);
              setTimeLeft(studyTime);
            } else {
              setRound(prevRound => prevRound + 1);
              setTimeLeft(breakTime);
            }
          }
          return prevTimeLeft - 1;
        });
      }, 1000); // Update every second
      return () => clearInterval(timer);
    }
  }, [sessionStarted, studyTime, breakTime, round]);

  const startSession = () => {
    setSessionStarted(true);
  };

  const changeStudyTime = (event) => {
    const selectedStudyTime = parseInt(event.target.value) * 60; // Convert to seconds
    setStudyTime(selectedStudyTime);
    setTimeLeft(selectedStudyTime); // Update timeLeft as well if session is not started
  };

  const changeBreakTime = (event) => {
    setBreakTime(parseInt(event.target.value) * 60); // Convert to seconds
  };

  const changeRound = (event) => {
    setRound(parseInt(event.target.value));
  };

  const renderTimer = () => {
    if (sessionStarted) {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      return (
        <div className='timer'>
          <h1>{title}</h1>
          <label className="study-session-labels">{lang === 'English' ? 'Round' : 'Ronde'}: {round}</label><br></br>
          <label className="timer-label">{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</label>
        </div>
      );
    } else {
      return (
        <div className='study-session-1'>
          <h1>{title}</h1>
          <br />
          <label className="study-session-labels">{lang === 'English' ? 'Study Timer' : 'Minuteur d\'étude'}</label>
          <select id="study-time" value={studyTime / 60} onChange={changeStudyTime}>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
          </select><br />
          <label className="study-session-labels">{lang === 'English' ? 'Break Time' : 'Temps de pause'}</label>
          <select value={breakTime / 60} onChange={changeBreakTime}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select><br />

          <label className="study-session-labels">{lang === 'English' ? 'Round' : 'Ronde'}</label>
          <select value={round} onChange={changeRound}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select><br />
          <button onClick={startSession} id="start-session">{lang === 'English' ? 'Start Session' : 'Commencer la session'}</button>
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
