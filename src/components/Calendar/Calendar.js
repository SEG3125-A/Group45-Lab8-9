import React, { useState } from 'react';
import './Calendar.css';

const Calendar = ({ lang }) => {
  const [dueDates, setDueDates] = useState(Array(9).fill([]));

  const addDueDate = (index) => {
    const newDueDates = [...dueDates];
    const dueDate = prompt(lang === 'English' ? 'Enter Event:' : 'Entrez l\'événement:');
    if (dueDate) {
      newDueDates[index] = [...newDueDates[index], dueDate];
      setDueDates(newDueDates);
    }
  };

  const toggleCrossOut = (index, eventIndex) => {
    const newDueDates = [...dueDates];
    const prefix = lang === 'English' ? 'Crossed out: ' : 'Barré: ';
    newDueDates[index][eventIndex] = newDueDates[index][eventIndex].startsWith(prefix) ? newDueDates[index][eventIndex].replace(prefix, '') : prefix + newDueDates[index][eventIndex];
    setDueDates(newDueDates);
  };

  return (
    <div className="card">
      <h1>{lang === 'English' ? 'Calendar' : 'Calendrier'}</h1>
      <div className="calendar">
        {dueDates.map((dueDateList, index) => (
          <div key={index} className="day" onClick={() => addDueDate(index)}>
            <div className="circle">{index + 1}</div>
            {dueDateList.map((dueDate, i) => (
              <p key={i} className={dueDate.startsWith(lang === 'English' ? 'Crossed out: ' : 'Barré: ') ? "cross-out" : ""} onClick={(e) => { e.stopPropagation(); toggleCrossOut(index, i); }}>{dueDate}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
