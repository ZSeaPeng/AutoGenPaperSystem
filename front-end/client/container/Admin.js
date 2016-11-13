import React from 'react';
import { Link } from 'react-router'

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/admin/user">管理用户</Link>
        <Link to="/admin/course">管理学科</Link>
        { this.props.children }
      </div>
    );
  }
}
