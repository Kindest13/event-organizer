import React from 'react';
import Event from './event/event';
import './events.css';

const events = ({ events, filtered }) => {
  let showEvents;
  if(filtered) {
    showEvents = filtered;
  } else {
    showEvents = events;
  }

  return (
    <ul className="events">
      {showEvents.map((event, index) => (
        <li key={index}>
          <Event info={event} />
        </li>
        ))}
    </ul>
  );
};

export default events;