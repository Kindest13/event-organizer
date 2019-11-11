import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from '../../components/form/form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { textFieldsInfo, checkboxFieldInfo, radioFieldInfo } from '../../helpers/constants';
import { postEventData } from '../../store/actions/addEventAction';

import "./eventCreator.css";

class EventCreator extends Component {
  state = {
    eventData: {
      title: '',
      attendees: '',
      street: '',
      city: '',
      country: '',
      end: '',
      start: '',
      type: 'public',
      extra: {
        medic: true,
        security: true,
        approval: true
      }
    },
    submit: false,
    validDate: true
  }

  dateCheck = (startDate, endDate) => {
    let valid = this.state.validDate;
    if(new Date(startDate) >= new Date(endDate)) {
      valid = false
    } else {
      valid = true;
    }
    return valid;
  }

  onSumbitCheckRequiredFields = (eventData) => {
    const { start, end } = eventData;
    const fulfilled = Object.values(eventData).every(value => value) && this.dateCheck(start, end);
    this.setState({submit: fulfilled, validDate: this.dateCheck(start, end)});
  }

  extraWeekday = (eventData) => {
    if(new Date(eventData.start).getDay() > 0 && new Date(eventData.start).getDay() < 6) {
      eventData.extra.approval = true;
    }
  }

  extraAttendees = (eventData) => {
    if(eventData.attendees >= 20) {
      eventData.extra.security = true;
      if(eventData.attendees >= 50) {
        eventData.extra.medic = true;
      }
    }
  }

  onInputChange = ({ target: { name, value } }) => {
    const { eventData } = { eventData: { ...this.state.eventData, extra: {...this.state.eventData.extra } } };
    eventData[name] = value;

    if(name === 'start') {
      eventData.end = eventData.start;
    }

    if(eventData.type === 'public') {
      eventData.extra.security = true;
      eventData.extra.medic = true;
      eventData.extra.approval = true;
    }
    else if(new Date(eventData.start).getDay() > 0 && new Date(eventData.start).getDay() < 6) {
      eventData.extra.security = false;
      eventData.extra.medic = false;
      eventData.extra.approval = true;
      this.extraAttendees(eventData);
    }
    else if(eventData.attendees >= 20) {
      eventData.extra.approval = false;
      eventData.extra.medic = false;
      eventData.extra.security = true;
      if(eventData.attendees >= 50) {
        eventData.extra.medic = true;
      }
      this.extraWeekday(eventData);
    } else {
      eventData.extra.security = false;
      eventData.extra.medic = false;
      eventData.extra.approval = false;
    };

    this.setState({ eventData });
    this.onSumbitCheckRequiredFields(eventData);
  };

  onEventCreate = (event) => {
    const { history, onAdd } = this.props;
    const data = this.state.eventData;
    event.preventDefault();
    onAdd(data, history);
  };

  onPositiveInput = (event) => /[+-]$/.test(event.key) && event.preventDefault();

  render() {
    return (
      <div className="eventCreator">
        <h1>Please Fill In To Create Your Event</h1>
        <Form
          text={textFieldsInfo}
          checkbox={checkboxFieldInfo}
          radio={radioFieldInfo}
          positiveNumber={this.onPositiveInput}
          data={this.state}
          onInputChange={this.onInputChange}
          onAddEvent={this.onEventCreate} />
      </div>
    );
  }
};

const mapDispatchToProps = {
  onAdd: postEventData,
  // authFailAction: authFail,
};

// const mapStateToProps = state => ({
//   loading: state.authStatus.loading,
//   error: state.authStatus.error,
// });

export default connect(null, mapDispatchToProps)(withRouter(EventCreator));;
