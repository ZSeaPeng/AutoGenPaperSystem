import React, { Component } from 'react';
import { connect } from 'react-redux';

//UI
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

//add component
import UserDetail from './UserDetail';

//add action
import { getUserList } from '../actions/actionCreators';


class ControlUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: false
    };
    this.handleAddUser = this.handleAddUser.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  handleAddUser() {
    this.setState({type: !this.state.type})
  }

  usernameChange(e) {
    this.state.username = e.target.value
  }

  passwordChange(e) {
    this.state.password = e.target.value
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getUserList());
  }

  render() {
    const { userList } = this.props;
    var styles = {
      button: {
        position: 'fixed',
        bottom: 20,
        right: 20
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      div: {
        display: '-webkit-flex', /* Safari */
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
      },
      paper: {}
    };

    if(this.state.type) {
      styles.paper = {
        position: 'fixed',
        margin: 'auto',
        height: 300,
        width: 300,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999
      }
    } else {
      styles.paper = {
        display: 'none'
      }
    }

    return (
      <div>
        <div style={styles.div}>
          { userList.old.map((user, i) =>
            <UserDetail { ...this.props } user = {user} key={i} i={i}/>)
          }
          <FloatingActionButton style={styles.button} onClick={this.handleAddUser}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
        <Paper style={styles.paper} zDepth={5}>

        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ userList, grades }) => ({ userList, sublist: grades.sublist });

export default connect(mapStateToProps)(ControlUser);