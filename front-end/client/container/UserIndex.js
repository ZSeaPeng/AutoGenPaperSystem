import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import style from '../style/QuestionCard.css';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Dialog from 'material-ui/Dialog';

import { asynRecUserInfo } from '../actions/actionCreators';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      passone: '',
      passtwo: '',
      text: '密码'
    }
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.passoneChange = this.passtwoChange.bind(this);
    this.passtwoChange = this.passtwoChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.setState({open: false})
  }

  passoneChange(e) {
    this.state.passone = e.target.value;
  }

  passtwoChange(e) {
    this.state.passtwo = e.target.value;
    if(this.state.passtwo !== this.state.passone) {
      this.setState({text: '密码(密码不一致)'})
    } else {
      this.setState({text: '密码'})
    }
  }

  handleChangePass() {
    this.setState({open: true});
  }

  handleSubmit() {
    const password = this.state.passone;
    this.setState({open: false})
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(asynRecUserInfo())
  }

  render() {
    const { userInfo } = this.props;
    return (
      <div className={style.userinfo}>
        <TextField
          disabled={true}
          floatingLabelText="姓名"
          defaultValue="WuHan"
          floatingLabelStyle={{color: '#000'}}
          inputStyle={{color: '#000'}}
        />
        <div>
          <TextField
            disabled={true}
            floatingLabelText="密码"
            defaultValue="1234qwer"
            floatingLabelStyle={{color: '#000'}}
            inputStyle={{color: '#000'}}
            type="password"
          />
          <FlatButton label="修改密码" secondary={true} onClick={this.handleChangePass}/>
        </div>
        <List>
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
          <ListItem
            initiallyOpen={false}
            primaryTogglesNestedList={true}>
            <Link to='/collections'>
              已收藏试题
            </Link>
          </ListItem>
        </List>
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
            floatingLabelText={this.state.text}
            password="password"
            onChange={ this.passtwoChange }
          /><br />
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = ({ grades, userInfo }) => ({
  grades, userInfo
});

export default connect(mapStateToProps)(UserIndex);
