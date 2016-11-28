import React from 'react';
import { connect } from 'react-redux';

import SignUp from '../components/SignUp'

import { adminLogin } from '../actions/actionCreators'

class adminlogin extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(username, password) {
    const { dispatch } = this.props;
    dispatch(adminLogin(username, password))
  }

  render() {
    const {error} = this.props;
    return (
      <SignUp error={error} onChange={this.handleSubmit}/>
    );
  }
}

const mapStateToProps = ({grades}) => ({error: grades.error});

export default connect(mapStateToProps)(adminlogin)
