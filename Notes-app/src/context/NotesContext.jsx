// src/context/NotesContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => setNotes([...notes, { ...note, id: Date.now() }]);
  const editNote = (updatedNote) => setNotes(notes.map(note => note.id === updatedNote.id ? updatedNote : note));
  const deleteNote = (id) => setNotes(notes.filter(note => note.id !== id));

  return (
    <NotesContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};
