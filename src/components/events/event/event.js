import React from 'react';
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
          <span className="start">Start At: {getDate(start)}</span>
          <span className="hours">Time Length: {getMinutes(start, end)} minutes</span>
        </div>
      </header>
      <body>
        <h3 className="title">{title}</h3>
      </body>
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

export default event;