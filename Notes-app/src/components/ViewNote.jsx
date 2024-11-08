// src/components/ViewNote.jsx
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

const ViewNote = () => {
  const { id } = useParams();
  const { notes } = useContext(NotesContext);

  // Find the note with the matching ID
  const note = notes.find((note) => note.id === parseInt(id));

  // If no note found (e.g., invalid ID), return a message or redirect
  if (!note) {
    return <p>Note not found</p>;
  }

  return (
    <div className="view-note">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p>Category: {note.category}</p>
      <p>Created on: {new Date(note.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default ViewNote;
