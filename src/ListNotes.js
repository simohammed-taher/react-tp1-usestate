import React, { useState } from 'react';
import './ListNotes.css';
export default function ListNotes() {
  const [matier, setMatier] = useState('');
  const [nom, setNom] = useState('');
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const matieres = [
    { id: 10, matierre: 'arabe' },
    { id: 11, matierre: 'english' },
    { id: 12, matierre: 'france' }
  ];

  function ajoute() {
    const index = parseInt(matier); // Parse the matier value as an integer
    const myNote = {
      id: matieres[index].id,
      matier: matieres[index].matierre,
      note: note
    };
    setNotes([...notes, myNote]); // Update the notes state
  }

  function supprimer(id) {
    setNotes(notes.filter(n => n.id !== parseInt(id)));
  }

  function update(id) {
    const index = parseInt(matier);
    const updatedNotes = notes.map((n) => {
      if (n.id === parseInt(id)) {
        return {
          id: matieres[index].id,
          matier: matieres[index].matierre,
          note: note,
        };
      } else {
        return n;
      }
    });
    setNotes(updatedNotes);
  }

  return (
    <div className="list-notes-container">
      <h1>--GESTION NOTES</h1>
      <label>nom:</label>
      <input type='text' value={nom} onChange={(e) => setNom(e.target.value)} />
      <br />
      <label>matier</label>
      <select value={matier} onChange={(e) => setMatier(e.target.value)}>
        <option value=''>Select a matier</option>
        {matieres.map((item, index) => (
          <option key={index} value={index}>{item.matierre}</option>
        ))}
      </select>
      <br />
      <label>Note/20</label>
      <input type='number' value={note} onChange={(e) => setNote(e.target.value)} />
      <br />
      <button onClick={ajoute}>Ajouter</button>
      {notes.map((n, index) => (
        <div key={index}>
            <span>{nom}</span>
          <span>{n.id}</span>
          <span>{n.matier}</span>
          <span>{n.note}</span>
          <span onClick={() => supprimer(n.id)}>delete</span>
          <span onClick={() => update(n.id)}>update</span>
        </div>
      ))}
    </div>
  );
}
