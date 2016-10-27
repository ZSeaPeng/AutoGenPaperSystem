import React, { Component, PropTypes } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import Course from './Course'

class Grade extends Component{
  render() {
    const { grade } = this.props;
    return(
      <div>
      { grade.contextList.map((course, i) =>
        <Course course={ course } key={i} i={i} />
      )}
      </div>
    )
  }
};

Grade.propTypes = {
  grades: PropTypes.array.isRequired
};

export default Grade;