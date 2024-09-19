import React from 'react';
import TicketCard from './TicketCard';

const groupTickets = (tickets, grouping) => {
  if (!Array.isArray(tickets)) {
    console.error('Expected tickets to be an array');
    return {};
  }

  return tickets.reduce((acc, ticket) => {
    const key = ticket[grouping] || 'No Group';
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(ticket);
    return acc;
  }, {});
};

const sortTickets = (tickets, sorting) => {
  if (!Array.isArray(tickets)) return tickets;
  
  if (sorting === 'priority') {
    return tickets.sort((a, b) => b.priority - a.priority);
  } else if (sorting === 'title') {
    return tickets.sort((a, b) => a.title.localeCompare(b.title));
  }
  return tickets;
};

const KanbanBoard = ({ tickets, grouping, sorting }) => {
  const groupedTickets = groupTickets(tickets, grouping);
  const sortedGroupedTickets = Object.keys(groupedTickets).reduce((acc, group) => {
    acc[group] = sortTickets(groupedTickets[group], sorting);
    return acc;
  }, {});

  return (
    <div className="kanban-board">
      {Object.keys(sortedGroupedTickets).map((group) => (
        <div key={group} className="column">
          <h3>{group}</h3>
          {sortedGroupedTickets[group].map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
