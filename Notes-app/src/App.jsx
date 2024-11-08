// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotesProvider } from './context/NotesContext';
import HomePage from './components/HomePage';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';
import ViewNote from './components/ViewNote';

function App() {
  return (
    <NotesProvider>
      <Router>
        <div className="min-h-screen bg-gray-300 p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-note" element={<AddNote />} />
            <Route path="/edit-note/:id" element={<EditNote />} />
            <Route path="/note/:id" element={<ViewNote />} /> 
          </Routes>
        </div>
      </Router>
    </NotesProvider>
  );
}

export default App;
