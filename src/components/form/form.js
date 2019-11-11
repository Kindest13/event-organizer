import React from 'react';
import PropTypes from 'prop-types';

import TextInput from './textInput/textInput';
import RadioInput from './radioInput/radioInput';
import CheckboxInput from './checkboxInput/checkboxInput';

import "./form.css";

const form = ({
  text, radio, checkbox, positiveNumber, onInputChange, onAddEvent, data,
}) => {
  return (
    <form className="createNewEventForm">
      { text.map((info, index) => <TextInput key={index} info={info} positiveNumber={positiveNumber} onInputChange={onInputChange} data={data} />) }
      <RadioInput info={radio} onInputChange={onInputChange} eventType={data.eventData.type} />
      <CheckboxInput info={checkbox} extraOrders={data.eventData.extra} />
      <button
        type="submit"
        onClick={onAddEvent}
        disabled={!data.submit}>Create</button>
    </form>
  );
};

form.propTypes = {
  text: PropTypes.instanceOf(Object),
  radio: PropTypes.instanceOf(Object),
  checkbox: PropTypes.instanceOf(Object),
  positiveNumber: PropTypes.func,
  data: PropTypes.instanceOf(Object),
  onInputChange: PropTypes.func.isRequired,
  onAddEvent: PropTypes.func.isRequired,
};

export default form;
