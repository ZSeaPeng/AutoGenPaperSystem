import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from '!style!css!../style/slick.min.css';
import { Link } from 'react-router';

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import UserEdit from '../components/UserEdit.js';
import PswdEdit from '../components/PswdEdit.js';
import SubUser from './SubUser';


import { asynRecUserInfo, asynRecCommanagerInfo, asynUserChange, asynChangeInfo, asynShowPaper } from '../actions/actionCreators';

import imgSrc from '../img/timg.jpg';

const styles = {
  container: {
    padding: 'auto',
    marginLeft: 50,
    marginRight: 50,
  },
  parent: {
    width:1200,
    height:900,
    margin:'auto',
    padding:'auto',
  },
  leftMenu: {
    width:200,
    height:880,
    float:'left',
    margin:10,
    padding:0,
    textAlign: 'center',
    display: 'inline-block',
  },
  content: {
    width:970,
    height:880,
    float:'left',
    marginTop:10,
    padding:'auto',
    textAlign: 'center',
    display: 'inline-block',
  },
  table: {

    fontSize: 20,
    color: "gray",
    borderSpacing: 20,
  },
  head: {
    width:160,
    height:160,
    float:'left',
    margin:'0px 20px 30px 20px',
    padding:'auto',
    textAlign: 'center',
    display: 'inline-block',
  },
  selected: {
    backgroundColor: '#E91E63',
    color: '#FFFFFF'
  },
};

class Management extends Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state={
      item: 0
    }
  };

  componentDidMount() {
    const { dispatch } = this.props;
    let type = window.sessionStorage.getItem('type');;
    if (type == 1){
      dispatch(asynRecUserInfo());
    } else {
      dispatch(asynRecCommanagerInfo());
    }

  };
	render() {

    let info = [];
    let infoEdit = [];
    let historyPaper = [];
    let paper;
    for (paper of this.props.userInfo.historyPaper) {
      let date = new Date(paper.generatime);
      let time = date.getFullYear() + '-' +
        (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-' +
        (date.getDate() <10 ? '0' + date.getDate() : date.getDate())+ ' ' +
        (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':' +
        (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes() ) + ':' +
        (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
      historyPaper.push({
        time: time,
        papername: paper.papername,
        paperurl: paper.paperurl,
        answerurl: paper.answerurl
      });
    }
    let isNormal = false;
    if (window.sessionStorage.getItem('type') == 1) {
      isNormal = window.sessionStorage.getItem('type') == 1;
      let { username, email, phoneNum,school,allowpaper,downloadable } = this.props.userInfo;
      info.push(
        { name:'用户名', context: username },
        { name: '学校', context: school },
        { name: '邮箱', context: email },
        { name: '电话', context: phoneNum },
        { name: '可下载试卷', context: 0 },
        { name: '已下载试卷', context: 0 }
      );
      infoEdit.push(
        { name:'用户名', context: username },
        { name: '学校', context: school },
        { name: '邮箱', context: email },
        { name: '电话', context: phoneNum }
      );

    } else {
      const { username, school,subjectcan } = this.props.userInfo;
      info.push(
        { name:'用户名', context: username },
        { name: '学校', context: school },
        { name: '可下载试卷', context: 0 },
        { name: '已下载试卷', context: 0 }
      );
      infoEdit.push(
        { name:'用户名', context: username },
        { name: '学校', context: school },
      );

    }

    let type = isNormal ? '普通用户' : '集团用户';
    let item = this.state.item + '';


		return (
      <div style={styles.parent}>
        <Paper style={styles.leftMenu} zDepth={2}>
          <h2>{type}</h2>
          <Paper style={styles.head} zDepth={2}>
            <img src={imgSrc} style={{width: '100%'}} />

          </Paper>
          <Paper style={{display: 'inline-block',margin: 'auto'}}>
            <Menu style={{width:160}}
              onItemTouchTap={this.handleChange}
              value = {item}
              selectedMenuItemStyle= {styles.selected}
              >
              <MenuItem primaryText="个人信息" value='0'/>
              <MenuItem primaryText="历史组卷" value='1'/>
              <MenuItem primaryText="我的收藏" value='2'/>
              {
                isNormal ? <div></div> :
                <MenuItem primaryText="用户管理" value='3'/>
              }
            </Menu>
          </Paper>
        </Paper>
        <Paper style={styles.content} zDepth={2}>
          <div style={item == 0 ? {display: 'block'} : {display: 'none'}}>
            <h1>个人信息</h1>
            {/*可下载纸卷
               已下载试卷
               邮箱
               电话
               学校
               学科
               集团
               */}
            <Paper style={{width:700, margin:'auto'}}>
              <table style={styles.table}>
                <tbody>
                  {info.map((inf, i) => <tr key ={i}>
                    <td style={{width: 100,}}><p>{inf.name}</p></td>
                    <td style={{width: 20}}><p>:</p></td>
                    <td>{inf.context}</td>
                  </tr>)}
                  <tr>
                    <td>
                      <UserEdit infoEdit={infoEdit}/>
                    </td>
                    <td>
                      <PswdEdit/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Paper>
          </div>
          <div style={item == 1 ? {display: 'block'} : {display: 'none'}}>
            <h1>历史组卷</h1>
            {/*试卷名字 + 试卷 + 答案*/}
            <Paper style={{width:900,height:700, margin:'auto',textAlign:'left', padding: 30}}>
              {/* <Link to="/paper5"><p>2016数学高考试卷</p></Link>
              <Link to="/paper5"><p>2015数学高考试卷</p></Link> */}
              {
                isNormal ?
                <Table
                  height={'600px'}
                  fixedHeader={true}>
                  <TableHeader
                    displaySelectAll={false}>
                    <TableRow>
                      <TableHeaderColumn>时间</TableHeaderColumn>
                      <TableHeaderColumn>试卷名称</TableHeaderColumn>
                      <TableHeaderColumn>查看试卷</TableHeaderColumn>
                      <TableHeaderColumn>查看答案</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody
                    displayRowCheckbox={false}
                    showRowHover={true}>
                    {
                      historyPaper.map((paper, i) =>
                      <TableRow key = {i}>
                        <TableRowColumn>{paper.time}</TableRowColumn>
                        <TableRowColumn>{paper.papername}</TableRowColumn>
                        <TableRowColumn>
                          <RaisedButton label="查看试卷" primary={true}
                            href={paper.paperurl}/>
                        </TableRowColumn>
                        <TableRowColumn>
                          <RaisedButton label="查看答案" secondary={true}
                            href={paper.answerurl}/>
                        </TableRowColumn>
                      </TableRow>)
                    }
                  </TableBody>
                </Table> :
                <div>
                  <Link to="/paper5"><p>2016数学高考试卷</p></Link>
                  <Link to="/paper5"><p>2015数学高考试卷</p></Link>
                </div>
              }
            </Paper>
          </div>
          <div style={item == 2 ? {display: 'block'} : {display: 'none'}}>
            {/*收藏的题目*/}
            <h1>我的收藏</h1>
          </div>
          <div style={item == 3 ? {display: 'block'} : {display: 'none'}}>
            <h1>用户管理</h1>
            <SubUser/>
          </div>
        </Paper>

      </div>
		);
    };

    handleChange = (e, m, n) => {
      this.setState({
        item: n,
      })
    }

}

const mapStateToProps = state => {
  let { grades,userInfo } = state;
  return {
    grades,
    userInfo
  }
};

export default connect(mapStateToProps)(Management);
