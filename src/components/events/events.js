import React from 'react';
import Event from './event/event';
import PropTypes from 'prop-types';
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

events.propTypes = {
  filtered: PropTypes.instanceOf(Object),
  events: PropTypes.instanceOf(Object),
};

export default events;