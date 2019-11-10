import React from 'react';
import ReactDOM from 'react-dom';

import TextInput from './textInput/textInput';
import RadioInput from './radioInput/radioInput';
import CheckboxInput from './checkboxInput/checkboxInput';

import "./form.css";

const form = ({
  text, radio, checkbox, positiveNumber, onInputChange, eventData, onAddEvent, submit
}) => {
  return (
    <form className="createNewEventForm">
      { text.map((info, index) => <TextInput key={index} info={info} positiveNumber={positiveNumber} onInputChange={onInputChange} />) }
      <RadioInput info={radio} onInputChange={onInputChange} eventType={eventData.type} />
      <CheckboxInput info={checkbox} extraOrders={eventData.extra} />
      <button
        type="submit"
        onClick={onAddEvent}
        disabled={!submit}>Create</button>
    </form>
  );
}

export default form;
