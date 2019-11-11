import React from 'react';
import ReactDOM from 'react-dom';

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
}

export default form;
