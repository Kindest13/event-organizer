export const textFieldsInfo = [
  {
    type: 'text',
    name: 'title',
    label: 'Event Title *',
  },
  {
    type: 'text',
    name: 'street',
    label: 'Street *',
  },
  {
    type: 'text',
    name: 'city',
    label: 'City *',
  },
  {
    type: 'text',
    name: 'country',
    label: 'Country *',
  },
  {
    type: 'number',
    name: 'attendees',
    label: 'Event Attendees *',
    min: 1,
  },
  {
    type: 'datetime-local',
    name: 'start',
    label: 'Event Starts *',
    min: new Date(),
  },
  {
    type: 'datetime-local',
    name: 'end',
    label: 'Event Ends *',
    min: new Date(),
  },
];

export const checkboxFieldInfo = {
  type: 'checkbox',
  names: ['medic', 'security', 'approval'],
  label: 'Event Extra Orders',
  values: ['Order medical assistance', 'Order security assistance', 'Order gov approval'],
};

export const radioFieldInfo = {
  type: 'radio',
  name: 'type',
  label: 'Event Type',
  values: ['public', 'private']
};
