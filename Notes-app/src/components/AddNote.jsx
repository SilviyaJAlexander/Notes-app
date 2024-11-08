// src/components/AddNote.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotesContext } from '../context/NotesContext';

function AddNote() {
  const { addNote } = useContext(NotesContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Work'); // Default category
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({
      title,
      content,
      category,
    });
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="p-6 max-w-md w-full bg-gray-200 rounded shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Add New Note</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter note title"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="content">Content:</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3 py-2 border rounded h-24"
              placeholder="Enter note content"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="category">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Shopping">Shopping</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 px-4 rounded font-semibold hover:bg-purple-600"
          >
            Save Note
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNote;
