import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Events from '../../components/events/events';

import "./main.css";

class Main extends Component {
  render() {
    console.log(this.props.events);
    return (
      <div className="main">
        <h1>Events We Host</h1>
        <Link to='/addEvent' className="btn btn-link">Create Your Own Event</Link>
        <Events events={this.props.events} />
      </div>
    );
  }
}

// const mapDispatchToProps = {
//   onAdd: postEventData,
//   // authFailAction: authFail,
// };

const mapStateToProps = state => ({
  events: state.postEventData.events,
});

export default connect(mapStateToProps)(withRouter(Main));;
