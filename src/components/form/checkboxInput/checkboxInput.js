import React from 'react';
import PropTypes from 'prop-types';

import './checkboxInput.css';

const checkboxInput = ({
   info: { names, label, type, values }, extraOrders, 
}) => (
  <div className="checkField">
    <label className="title">{label}</label>
    {names.map((name, index) => (
      <div className="checkButton" key={index}>
        <input
          name={name}
          type={type}
          disabled
          checked={extraOrders[name]} />
        <label htmlFor="" className="label">{values[index]}</label>
      </div>
    ))}
  </div>
);

checkboxInput.propTypes = {
  info: PropTypes.shape({
    names: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    values: PropTypes.array.isRequired,
  }).isRequired,
  extraOrders: PropTypes.object.isRequired,
};

export default checkboxInput;
