import React from 'react';
import PropTypes from 'prop-types';

import './radioInput.css';

const radioInput = ({
   info: { name, label, type, values }, onInputChange, eventType
}) => (
  <div className="radioField">
    <p className="title">{label}</p>
    {values.map((value, index) => (
      <div className="radioButton" key={index}>
        <input
          name={name}
          type={type}
          value={value}
          onChange={onInputChange}
          checked={eventType === value} />
        <label htmlFor="radioButton">{value}</label>
      </div>
    ))}
  </div>
);

radioInput.propTypes = {
  info: PropTypes.shape({
    values: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}).isRequired,
onInputChange: PropTypes.func.isRequired,
eventType: PropTypes.string.isRequired,
};

export default radioInput;
