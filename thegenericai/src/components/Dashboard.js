import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskSummary from '../components/TaskSummary';

function Dashboard() {
  const [summary, setSummary] = useState(null);

  const handleTaskSubmit = (task) => {
    // Simulate API call with a fake result
    setSummary({
      website: task.website,
      instructions: task.instructions,
      result: "Cheapest flight found: Airline - Delta, Price - $150, Departure - 10:00 AM, Return - 3:00 PM"
    });
  };

  return (
    <div className="container mx-auto py-12">
      <TaskForm onSubmit={handleTaskSubmit} />
      <TaskSummary summary={summary} />
    </div>
  );
}

export default Dashboard;
