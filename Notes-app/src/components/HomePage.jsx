import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NotesContext } from '../context/NotesContext';

function HomePage() {
  const { notes, deleteNote } = useContext(NotesContext);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Notes-app</h1>
      <Link to="/add-note" className="block w-fit mx-auto bg-purple-500 text-white py-2 px-4 rounded mb-6">
        Add Note
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {notes.map((note) => (
          <div key={note.id} className="p-4 bg-gray-200 rounded shadow">
            <h2 className="text-xl font-bold">{note.title}</h2>
            <p className="mt-2 text-gray-600">{note.content.slice(0, 100)}...</p>
            <p className="mt-2 text-sm text-gray-500">
              Created On: {new Date(note.id).toLocaleDateString()}
            </p>
            <div className="flex gap-2 mt-4">
              {/* Styled buttons with a common class and different colors */}
              <Link to={`/note/${note.id}`} className="action-button bg-blue-500 hover:bg-blue-600">
                View
              </Link>
              <Link to={`/edit-note/${note.id}`} className="action-button bg-green-500 hover:bg-green-600">
                Edit
              </Link>
              <button
                onClick={() => deleteNote(note.id)}
                className="action-button bg-red-500 hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
