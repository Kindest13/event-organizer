import React from 'react';
import PropTypes from 'prop-types';

import './sort.css';

const sort = ({ onChange }) => (
  <div className="sort">
    <label htmlFor="addressSort">
      <input type="radio" name="sort" value="address" id="addressSort" onChange={onChange} />
      <span className="label">Address</span>
    </label>
    <label htmlFor="nameSort">
      <input type="radio" name="sort" value="name" id="nameSort" onChange={onChange} />
      <span className="label">Name</span>
    </label>
  </div>
);

sort.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default sort;
