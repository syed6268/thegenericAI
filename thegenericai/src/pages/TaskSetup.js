import React, { useState } from 'react';

function TaskSetup() {
  const [website, setWebsite] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Task Submitted for ${website}`);
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Set Up a New Task</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Website URL</label>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          placeholder="e.g., expedia.com"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        
        <label className="block mb-2">Task Instructions</label>
        <textarea
          className="w-full p-2 border rounded mb-4"
          rows="5"
          placeholder="1. Go to expedia.com\n2. Search for flights..."
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded" type="submit">Submit Task</button>
      </form>
    </div>
  );
}

export default TaskSetup;
