// src/components/Test.jsx
import React from 'react';

function Test() {
  return (
    <div className="p-4 bg-blue-500 text-white text-center rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Test Component</h2>
      <p className="text-lg">This is a test component to check Tailwind CSS styling.</p>
      <button className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded">
        Test Button
      </button>
    </div>
  );
}

export default Test;
