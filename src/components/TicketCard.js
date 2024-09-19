import React from 'react';

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <h4>{ticket.title}</h4>
      <p><strong>Priority:</strong> {['No priority', 'Low', 'Medium', 'High', 'Urgent'][ticket.priority]}</p>
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><strong>User:</strong> {ticket.userId}</p>
    </div>
  );
};

export default TicketCard;
