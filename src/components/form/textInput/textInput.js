import React from 'react';
import PropTypes from 'prop-types';

const textInput = ({
   info: { name, label, type, min }, positiveNumber, onInputChange, data: { eventData: { start, end }, validDate }
}) => {
  const dateValidity = (name, validDate) => {
    let validity = '';
    if(name === 'end'){
      validity = validDate ? 'valid' : 'invalid';
    }
    return validity;
  }
  const multipleDateWrite = (name, start) => {
    if(name === "end" && start === end) {
      return start;
    }
  }
  return (
    <div className="formField">
      <label htmlFor={name} className={`${dateValidity(name, validDate)}`}>{label}</label>
      <div className="field">
      <input
        id={name}
        name={name}
        type={type}
        onChange={onInputChange}
        min={min}
        required
        onKeyDown={type === "number" ? positiveNumber : null}
        value={multipleDateWrite(name, start)} />
      </div>
    </div>
)};

textInput.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    min: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(Date)]),
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  positiveNumber: PropTypes.func,
  onInputChange: PropTypes.func.isRequired,
  data: PropTypes.shape({
    eventData: PropTypes.shape({
      start: PropTypes.string,
      end: PropTypes.string
    }).isRequired
  }).isRequired,
  validDate: PropTypes.bool
};

export default textInput;
