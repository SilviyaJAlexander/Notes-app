// src/components/EditNote.jsx
import React, { useState, useContext, useEffect } from 'react';
import { NotesContext } from '../context/NotesContext';
import { useParams, useNavigate } from 'react-router-dom';

function EditNote() {
  const { notes, editNote } = useContext(NotesContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState({
    title: '',
    content: '',
    category: 'Work',
  });

  useEffect(() => {
    const existingNote = notes.find((note) => note.id === parseInt(id));
    if (existingNote) setNote(existingNote);
  }, [id, notes]);

  const handleChange = (e) => setNote({
    ...note,
    [e.target.name]: e.target.value,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    editNote(note);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-200 rounded max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Note</h2>
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <textarea
        name="content"
        value={note.content}
        onChange={handleChange}
        placeholder="Content"
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <select
        name="category"
        value={note.category}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded">Save Note</button>
    </form>
  );
}

export default EditNote;
