import React from 'react';
import Event from './event/event';
import './events.css';

const events = (props) => {

  return (
    <ul className="events">
      {props.events.map((event, index) => (
        <li key={index}>
          <Event info={event} />
        </li>
        ))}
    </ul>
  );
};

export default events;