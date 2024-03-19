
import React from 'react';
import './Note.css'
const Note = ({ title }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <textarea placeholder="Start writing here"></textarea>
    </div>
  );
};

export default Note;
