import React from 'react';
import PropTypes from 'prop-types';

import './filter.css';

const filter = ({ onSelect }) => (
  <div className="filter">
    <select name="month" id="monthFilter" onChange={onSelect}>
      <option value="all">All</option>
      <option value="0">January</option>
      <option value="1">February</option>
      <option value="2">March</option>
      <option value="3">April</option>
      <option value="4">May</option>
      <option value="5">June</option>
      <option value="6">July</option>
      <option value="7">August</option>
      <option value="8">September</option>
      <option value="9">October</option>
      <option value="10">November</option>
      <option value="11">December</option>
    </select>
  </div>
);

filter.propTypes = {
  onChange: PropTypes.func,
};

export default filter;