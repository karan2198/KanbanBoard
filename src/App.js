import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState('status'); // Default grouping
  const [sorting, setSorting] = useState('priority'); // Default sorting

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        setTickets(data.tickets);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleGroupingChange = (event) => {
    setGrouping(event.target.value);
  };

  const handleSortingChange = (event) => {
    setSorting(event.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>Kanban Board</h1>
        <div className="controls">
          <select onChange={handleGroupingChange} value={grouping}>
            <option value="status">Group by Status</option>
            <option value="userId">Group by User</option>
            <option value="priority">Group by Priority</option>
          </select>
          <select onChange={handleSortingChange} value={sorting}>
            <option value="priority">Sort by Priority</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>
      </header>
      <KanbanBoard tickets={tickets} grouping={grouping} sorting={sorting} />
    </div>
  );
};

export default App;
