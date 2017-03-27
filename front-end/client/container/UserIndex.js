import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { history } from '../store';

import style from '../style/QuestionCard.css';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

import SubUser from './SubUser';

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
    this.passoneChange = this.passoneChange.bind(this);
    this.passtwoChange = this.passtwoChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.handleChangemail = this.handleChangemail.bind(this);
    this.handleChangephone = this.handleChangephone.bind(this);
    this.seecoll = this.seecoll.bind(this);
  }

  handleClose() {
    this.setState({open: false, open1: false, open2: false})
  }

  phoneChange(e) {
    this.state.phone = e.target.value;
  }

  emailChange(e) {
    this.state.email = e.target.value;
  }

  handleChangePass() {
    this.setState({open: true});
  }

  handleChangemail() {
    this.setState({open1: true});
  }

  passoneChange(e) {
    this.state.passone = e.target.value;
  }

  passtwoChange(e) {
    this.state.passtwo = e.target.value;
  }

  handleChangephone() {
    this.setState({open2: true});
  }

  handleSubmit() {
    const { dispatch } = this.props;
    const password = this.state.passone;
    const password2 = this.state.passtwo;
    const reg = /^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i;
    if(password !== password2) {
      alert('密码不一致请重新输入!');
      return ;
    }
    if( reg.test(password) && password.length >= 8) {
      dispatch(asynUserChange(password));
    } else {
      alert('密码强度太低，请至少八位，并包含字母数字')
    }
  }

  handleSubmit2() {
    const { dispatch } = this.props;
    const phone = this.state.phone;
    const email = this.state.email;
    dispatch(asynChangeInfo(email, phone))
    this.setState({open: false, open1: false, open2: false, phone: '', email: ''})
  }

  seecoll() {
    history.push('/collections')
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(asynRecUserInfo())
  }

  render() {
    const { userInfo, grades } = this.props;
    const { sublist } = grades;
    let count = userInfo.allowpaper;
    let sub = userInfo.subjectcan.split(',');
    let type = "普通用户";
    if (userInfo.type === 0) {
      type = "集团用户"
    } else {
      type = "普通用户"
    }
    const isNormal = userInfo.type === 0;
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
              {sub.map((subject, i) => <Chip style={{margin: 4}} key={i}>
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
            {isNormal
              ? <SubUser />
              : <div>
                已收藏试题: {userInfo.usercollection}
                <FlatButton label="点击查看" primary={true} onClick={this.seecoll}/>
              </div>
            }
            <List>
            <ListItem
                primaryText="已创建试卷"
                initiallyOpen={true}
                primaryTogglesNestedList={true}
                nestedItems=
                  {userInfo.historyPaper.map((paper, i) =>
                    <ListItem key={i}>
                      <Link to={`${paper.historyPaperUrl}`}>
                        {paper.paperName}---------------------{paper.paperDate}
                      </Link>
                    </ListItem>)}
              />
            </List>
          </CardText>
        </Card>
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
