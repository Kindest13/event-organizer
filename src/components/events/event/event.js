import React from 'react';
import PropTypes from 'prop-types';
import './event.css';

const event = ({ info: { street, city, country, title, attendees, type, start, end } }) => {
  const checkStatus = startDate => new Date() > new Date(startDate) ? 'Closed' : 'Opened';
  const getDate = date => new Date(date).toString().match(/.+?(?=\sGMT)/g)[0];
  const getMinutes = (startTime, endTime) => (new Date(endTime) - new Date(startTime)) / 6e4;
  return (
    <div className="event">
      <header>
        <div>
          <span className="type">{type}</span>
          <span className="people">{attendees} People</span>
        </div>
        <div>
          <span className="start">Start: {getDate(start)}</span>
          <span className="hours">Time Length: {getMinutes(start, end)} minutes</span>
        </div>
      </header>
      <main>
        <h3 className="title">{title}</h3>
      </main>
      <footer>
        <div>
          <span className="status">{checkStatus(start)}</span>
        </div>
        <address>
          <span className="street">{street}</span>
          <span className="city">{city}</span>
          <span className="country">{country}</span>
        </address>
      </footer>
    </div>
  );
}

event.propTypes = {
  info: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    attendees: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
  }).isRequired,
};

export default event;