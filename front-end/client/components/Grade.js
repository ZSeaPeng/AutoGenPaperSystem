import React, { Component, PropTypes } from 'react';

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
}

export default Grade;