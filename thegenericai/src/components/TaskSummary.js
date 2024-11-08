import React from 'react';

function TaskSummary({ summary }) {
  return (
    <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Task Summary</h2>
      {summary ? (
        <div>
          <p><strong>Website:</strong> {summary.website}</p>
          <p><strong>Instructions:</strong> {summary.instructions}</p>
          <p><strong>Result:</strong> {summary.result}</p>
        </div>
      ) : (
        <p>No summary available yet.</p>
      )}
    </div>
  );
}

export default TaskSummary;
