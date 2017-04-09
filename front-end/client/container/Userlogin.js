import React from 'react';
import { connect } from 'react-redux';

import SignUp from '../components/SignUp'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { asynLogin } from '../actions/actionCreators'

import zhituku from '../img/bg.jpg';

class adminlogin extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(username, password, type) {
    const { dispatch } = this.props;
    dispatch(asynLogin(username, password, type))
  }

  render() {
    const {error} = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <img src={zhituku} style={{minWidth: 1280}} />
          <SignUp error={error} onChange={this.handleSubmit}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({grades}) => ({error: grades.error});

export default connect(mapStateToProps)(adminlogin)
