import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import axios from 'axios';
import { getEventsData } from '../../store/actions/getEventsAction';
import Events from '../../components/events/events';
import Filter from '../../components/filter/filter';
import stubEvents from '../../events.json';
import Sort from '../../components/sort/sort';

import "./main.css";

class Main extends Component {
  state = {
    filteredEvents: null
  }
  componentDidMount() {
    const { getEventsData } = this.props;
    if(!this.props.isLoaded) {
      getEventsData(stubEvents);
    }
  }

  onSortByChange = ({ target: { value } }) => {
    const events = JSON.parse(JSON.stringify(this.state.filteredEvents));
    let sortedEvents;
    if(value === 'address') {
      sortedEvents = events.sort(function(event1, event2) {
        const stName1 = event1.street.replace(/[^a-zA-Z]/g, "");
        const stName2 = event2.street.replace(/[^a-zA-Z]/g, "");
        if(stName1 === stName2) {
            const stNumber1 = parseInt(event1.street.replace(/[^0-9]/g, ""), 10);
            const stNumber2 = parseInt(event2.street.replace(/[^0-9]/g, ""), 10);
            return stNumber1 === stNumber2 ? 0 : stNumber1 > stNumber2 ? 1 : -1;
        } else {
          return stName1 > stName2 ? 1 : -1;
        }
      });
      } else {
        sortedEvents = events.sort(function(event1, event2) {
          if(event1.title.toLowerCase() < event2.title.toLowerCase()) return -1;
          if(event1.title.toLowerCase() > event2.title.toLowerCase()) return 1;
          return 0;
        });
      };

      this.setState({filteredEvents: sortedEvents});
  }

  onSelectMonth = ({ target: { value } }) => {
    const events = JSON.parse(JSON.stringify(this.props.events));
    let filteredEvents = events.filter(event => new Date(event.start).getMonth() === parseInt(value));
    if(value === "all") {
      filteredEvents = null;
    }
    this.setState({ filteredEvents });
  }

  render() {
    const filter = this.props.events.length ? <Filter onSelect={this.onSelectMonth} /> : null;
    const sort = this.state.filteredEvents && this.state.filteredEvents.length ? <Sort onChange={this.onSortByChange} /> : null;
    return (
      <div className="main">
        <h1>Events We Host</h1>
        <div className="buttons">
          <Link to='/addEvent' className="btn btn-link">Create Your Own Event</Link>
          <div className="filters">
            {filter}
            {sort}
          </div>
        </div>
        <Events events={this.props.events} filtered={this.state.filteredEvents} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  events: state.eventData.events,
  isLoaded: state.eventData.isLoaded
});

export default connect(mapStateToProps, {
  getEventsData
})(withRouter(Main));;
