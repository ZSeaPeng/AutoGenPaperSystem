import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

//UI
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

//import component
import Combine from '../components/Combine';
import Grade from '../components/Grade';

//pic
import zhituku from '../img/head.png';
import phone from '../img/phone.png'

//import action
import { getInitialState, asynLogout } from '../actions/actionCreators';

class Navbar extends Component{
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    const { dispatch } = this.props;
    dispatch(asynLogout());
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getInitialState());
  };
  render() {
    const { sublist, userid, username } = this.props;
    const isEmpty = sublist.length === 0;
    const isLogin = userid === -1;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <Toolbar style={{backgroundColor: "#1565C0", height: "64px"}}>
            <ToolbarGroup>
              <div><img src={zhituku} style={{width: '1000px', paddingLeft: "22%",marginTop: "20px"}} /></div>
            </ToolbarGroup>
          </Toolbar>
          <Toolbar style={{backgroundColor: "#1565C0", height: "64px", boxShadow: "rgb(162, 187, 210) 0px 6px 10px"}}>
            <ToolbarGroup style={{left: '20%'}}>
              <Link to="/index" style={{color: '#FFFFFF', padding: "20px 40px"}}>
                首页
              </Link>
              {isEmpty
                ? <div></div>
                : <MenuItem
                style = {{lineHeight: '56px', padding: '0px 40px', color: '#FFFFFF'}}
                primaryText = '科目'
                menuItems =
                { sublist.map((grade, i) =>
                    <Grade grade={grade} key={i} i={i}/>)
                }
                />
              }
              <Link to="/manualcombine" style={{color: '#FFFFFF', padding: "20px 40px"}}>
                手动组卷
              </Link>

              <Link to="/autocombine" style={{color: '#FFFFFF', padding: "20px 40px"}}>
                自动组卷
              </Link>

              <Link to="/product" style={{color: '#FFFFFF', padding: "20px 40px"}}>
                产品介绍
              </Link>
              <Link to="/TeachingTeam" style={{color: '#FFFFFF', padding: "20px 40px"}}>
                教研团队
              </Link>
            </ToolbarGroup>
            <ToolbarGroup>
              {isLogin
                ? null
                : <div>
                  <small style={{color: '#FFF'}}>用户</small>&nbsp;
                  <Link style={{color: '#FFF', fontSize: 24}} to="/userindex">{username}</Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <FlatButton style={{color: '#FFF', margin: '9px 0'}} label="登出" onClick={this.handleLogout} />
                </div>
              }
            </ToolbarGroup>
          </Toolbar>
          { this.props.children }
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  const { grades } = state;
  const { sublist, userid, username } = grades;
  return {
    sublist,
    userid,
    username
  }
};

export default connect(mapStateToProps)(Navbar);
