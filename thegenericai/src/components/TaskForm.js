import React, { useState } from 'react';

function TaskForm({ onSubmit }) {
  const [website, setWebsite] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ website, instructions });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create a New Task</h2>
      <label className="block mb-2">Website</label>
      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        placeholder="e.g., expedia.com"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <label className="block mb-2">Instructions</label>
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows="4"
        placeholder="Step-by-step instructions..."
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded">Submit Task</button>
    </form>
  );
}

export default TaskForm;
