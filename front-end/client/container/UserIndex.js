import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import style from '../style/QuestionCard.css';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

import { asynRecUserInfo, asynUserChange, asynChangeInfo } from '../actions/actionCreators';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      open1: false,
      open2: false,
      passone: '',
      passtwo: '',
      email: '',
      phone: ''
    }
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.passoneChange = this.passtwoChange.bind(this);
    this.passtwoChange = this.passtwoChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.handleChangemail = this.handleChangemail.bind(this);
    this.handleChangephone = this.handleChangephone.bind(this);
  }

  handleClose() {
    this.setState({open: false, open1: false, open2: false})
  }

  passoneChange(e) {
    this.state.passone = e.target.value;
  }

  passtwoChange(e) {
    this.state.passtwo = e.target.value;
  }

  phoneChange(e) {
    this.state.email = e.target.value;
  }

  emailChange(e) {
    this.state.phone = e.target.value;
  }

  handleChangePass() {
    this.setState({open: true});
  }

  handleChangemail() {
    this.setState({open1: true});
  }

  handleChangephone() {
    this.setState({open2: true});
  }

  handleSubmit() {
    const { dispatch } = this.props;
    const password = this.state.passone;
    console.log(password);
    dispatch(asynUserChange(password));
  }

  handleSubmit2() {
    const { dispatch } = this.props;
    const phone = this.state.phone;
    const email = this.state.email;
    display(asynChangeInfo(phone, email))
    this.setState({open: false, open1: false, open2: false})
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(asynRecUserInfo())
  }

  render() {
    const { userInfo, grades } = this.props;
    const { sublist } = grades;
    let count = [], sub = [], pre = [];
    let array = userInfo.subjectcan.split(',');
    for ( let i = 1; i < array.length; i++ ) {
      pre = array[i].split('(');
      sub.push(pre[0]);
      count.push(pre[1].split(')')[0]);
    }
    let type = "普通用户";
    if (userInfo.type === 0) {
      type = "集团用户"
    } else {
      type = "普通用户"
    }
    return (
      <div className={style.userinfo}>
        <Card>
          <CardHeader
            style={{paddingBottom: 0}}
            avatar=""
            title={userInfo.username}
            subtitle={`${type},${userInfo.school}`}
          />
          <CardText>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
              {sub.map((subject, i) => <Chip style={{margin: 4}}>
                <Avatar size={32}>
                  {count[i]}
                </Avatar>
                {subject}
              </Chip>) }
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
              <div>
                密码: ********
                <FlatButton label="修改密码" secondary={true} onClick={this.handleChangePass}/>
              </div>
              <div>
                邮箱: {userInfo.email}
                <FlatButton label="修改邮箱" secondary={true} onClick={this.handleChangemail}/>
              </div>
              <div>
                手机: {userInfo.phoneNum}
                <FlatButton label="修改手机" secondary={true} onClick={this.handleChangephone}/>
              </div>
            </div>
          </CardText>
        </Card>
{/*        <List>
          <ListItem
            initiallyOpen={false}
            primaryTogglesNestedList={true}>
            <Link to='/collections'>
              已收藏试题
            </Link>
          </ListItem>
          <ListItem
            primaryText="已创建试卷"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems=
              {userInfo.userCreate.map((paper, i) =>
                <ListItem>
                  <Link to={`${paper.url}`}>
                    {paper.name}&nbsp;&nbsp;&nbsp;&nbsp;{paper.time}
                  </Link>
                </ListItem>)}
          />
        </List>*/}
        <Dialog
          title="修改密码"
          actions={[<RaisedButton label="确认修改密码" secondary={true} onClick={this.handleSubmit}/>]}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}>
          <TextField
            floatingLabelText="密码"
            type="password"
            onChange={ this.passoneChange }
          /><br />
          <TextField
            floatingLabelText="确认密码"
            type="password"
            onChange={ this.passtwoChange }
          /><br />
        </Dialog>
        <Dialog
          title="修改邮箱"
          actions={[<RaisedButton label="确认修改邮箱" secondary={true} onClick={this.handleSubmit2}/>]}
          modal={false}
          open={this.state.open1}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}>
          <TextField
            floatingLabelText="邮箱"
            onChange={ this.emailChange }
          />
        </Dialog>
        <Dialog
          title="修改手机"
          actions={[<RaisedButton label="确认修改手机" secondary={true} onClick={this.handleSubmit2}/>]}
          modal={false}
          open={this.state.open2}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}>
          <TextField
            floatingLabelText="手机"
            type="password"
            onChange={ this.phoneChange }
          />
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = ({ grades, userInfo }) => ({
  grades, userInfo
});

export default connect(mapStateToProps)(UserIndex);
