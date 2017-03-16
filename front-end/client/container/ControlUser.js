import React, { Component } from 'react';
import { connect } from 'react-redux';

//UI
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText} from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';

//add component
import UserDetail from './UserDetail';
import NewUserChip from '../components/NewUserChip'

//add action
import { getUserList, asynCreateUser, clear } from '../actions/actionCreators';

class ControlUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: false,
      username: '',
      password: '',
      email: '',
      phone: '',
      school: '',
      open: false,
      sub: [],
      count: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.schoolChange = this.schoolChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleAddUser() {
    this.setState({open: !this.state.open})
  }

  usernameChange(e) {
    this.state.username = e.target.value
  }

  passwordChange(e) {
    this.state.password = e.target.value
  }

  phoneChange(e) {
    this.state.phone = e.target.value
  }

  emailChange(e) {
    this.state.email= e.target.value
  }

  schoolChange(e) {
    this.state.school = e.target.value
  }

  handleClose() {
    this.state.count = [];
    this.state.sub=[];
    this.setState({open: false});
  };

  handleRequestClose() {
    const { dispatch } = this.props;
    dispatch(clear());
  };

  handleChange(detail, type) {
    const { count, sub } = this.state;
    // let count = 0, k = 0;
    if(type === 'add') {
      if(sub.indexOf(detail.id) < 0) {
        sub.push(detail.id);
      }
      count[detail.id]=detail.count;
    }
  }

  handleSubmit() {
    let { username, password, email, phone, school, sub, count } = this.state;
    const { userList, dispatch } = this.props;
    let counts = 0;
    let subject = '0,' + sub.toString();
    const reg = /^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i;
    for(let i = 0; i < count.length; i++) {
      if(count[i] === undefined ) {
        count = [...count.slice(0, i),...count.slice(i + 1)];
        i--;
      }
    }
    count = '0,' + count.toString();
    if( username === '' || password === '' || email === '' || phone === '' || school === '') {
      counts++;
      alert('带星标项不得为空');
      return ;
    }
    if(!reg.test(password) || password.length < 8) {
      counts++;
      alert('密码强度太低，请至少八位，并包含字母数字');
      return ;
    }
    for (let i = 0; i < userList.old.length; i++) {
      if (username === userList.old[i].username) {
        counts++;
        alert('用户名重复');
        return ;
      }
    }
    if(counts === 0) {
      dispatch(asynCreateUser({username, userpassword: password, school, phone, email, subjectcan: subject, count: count}));
    }
    this.state.count = [];
    this.state.sub=[];
    this.setState({open: false});
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getUserList());
  }

  render() {
    const { userList, sublist } = this.props;
    const isEmpty = sublist.length === 0;
    const isDelete = userList.delete !== "";
    let styles = {
      div: {
        display: '-webkit-flex', /* Safari */
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
      }
    };

    return (
      <div>
        <div style={styles.div}>
          <Card style={{maxWidth: "30%", margin: 10, display: 'inline-block'}} onClick={this.handleAddUser}>
            <CardText style={{fontSize: 36, color: '#9E9E9E'}}>
              添加用户
            </CardText>
          </Card>
          { userList.old.map((user, i) =>
            <UserDetail { ...this.props } user = {user} key={i} i={i}/>)
          }
        </div>
        <Dialog
          title="添加用户"
          actions={[<RaisedButton label="确认添加用户" secondary={true} onClick={this.handleSubmit}/>]}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}>
          <TextField
            floatingLabelText="用户名*"
            onChange={ this.usernameChange }
          />
          <TextField
            floatingLabelText="密码*"
            onChange={ this.passwordChange }
          />
          <TextField
            floatingLabelText="学校*"
            onChange={ this.schoolChange }
          />
          <TextField
            floatingLabelText="手机*"
            onChange={ this.phoneChange }
          />
          <TextField
            floatingLabelText="邮箱*"
            onChange={ this.emailChange }
          />
          <div>点击以添加</div>
          {!isEmpty
            ? <div style={styles.wrapper}>
              {
                sublist[0].contextList.map((context, i) =>
                  <NewUserChip key={i} i={i} sub={context} user={userList.new} onChange={this.handleChange}/>)
              }
            </div>
            : <div></div>
          }
        </Dialog>
        <Snackbar
          open={isDelete}
          message={`用户(${userList.delete})已删除`}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ userList, grades }) => ({ userList, sublist: grades.sublist });

export default connect(mapStateToProps)(ControlUser);