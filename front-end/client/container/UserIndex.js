import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import style from '../style/QuestionCard.css';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';

import { asynRecUserInfo } from '../actions/actionCreators';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
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
          <FlatButton label="修改密码" secondary={true} />
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
      </div>
    )
  }
}

const mapStateToProps = ({ grades, userInfo }) => ({
  grades, userInfo
});

export default connect(mapStateToProps)(UserIndex);
