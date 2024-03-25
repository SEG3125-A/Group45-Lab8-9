import React from 'react';
import './Note.css';

const Note = ({ title, lang }) => {
  return (
    <div className="card">
      <h1>{lang === 'English' ? title : 'Remarque'}</h1>
      <textarea placeholder={lang === 'English' ? 'Start writing here' : 'Commencez à écrire ici'}></textarea>
    </div>
  );
};

export default Note;
