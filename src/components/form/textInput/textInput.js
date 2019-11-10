import React from 'react';
import PropTypes from 'prop-types';

const textInput = ({
   info: { name, label, type, min }, positiveNumber, onInputChange
}) => (
  <div className="formField">
    <label htmlFor="field" className="label">{label}</label>
    <div className="field">
    <input
      name={name}
      type={type}
      onChange={onInputChange}
      min={min}
      required
      onKeyDown={type === "number" ? positiveNumber : null} />
    </div>
  </div>
);

textInput.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    min: PropTypes.number || PropTypes.instanceOf(Date),
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}).isRequired,
  positiveNumber: PropTypes.func,
  onInputChange: PropTypes.func.isRequired
};

export default textInput;
