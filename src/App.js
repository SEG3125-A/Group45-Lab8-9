import React, { useState } from 'react';
import Music from './components/Music/Music';
import Calendar from './components/Calendar/Calendar';
import Task from './components/Task/Task';
import Note from './components/Note/Note';
import Timer from './components/Timer/Timer';
import Calculator from './components/Calculator/Calculator';
import YouTubeVideo from './components/test/YoutubeVideo'; // Adjust the file path accordingly
import './App.css';

const App = () => {
  // State to manage the selected language
  const [language, setLanguage] = useState('English');

  // Function to handle language change
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  // YouTube video ID
  const videoId = 'tSlOlKRuudU';

  return (
    <div className="App">
      <h1 className='title'>{language === 'English' ? 'Simply Focus' : 'Concentrez-vous simplement'}</h1>
      <div className="select-container">
        {/* Select element to choose language */}
        <select value={language} onChange={handleLanguageChange}>
          <option value="English">English</option>
          <option value="French">French</option>
        </select>
      </div>
      <div className="grid">
        {/* Content for different components */}
        <YouTubeVideo videoId={videoId} title={language === 'English' ? 'Music' : 'Musique'}/>
        <Calendar title={language === 'English' ? 'Calendar' : 'Calendrier'} lang={language} />
        <Task title={language === 'English' ? 'Task' : 'Tâche'} lang={language}/>
        <Timer title={language === 'English' ? 'Study Session' : 'Séance d’étude'} lang={language} />
        <Calculator title={language === 'English' ? 'Calculator' : 'Calculatrice'} lang={language} />
        <Note title={language === 'English' ? 'Note' : 'Remarque'} lang={language}/>
      </div>
    </div>
  );
};

export default App;
