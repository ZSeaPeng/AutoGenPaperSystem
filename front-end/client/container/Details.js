import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from '../style/main.css';
import { history } from '../store';

//UI
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

//add components
import Lest from '../components/Lest';
import Point from '../components/Point';
import Question from '../components/Question';
import Page from '../components/Page';
import Choosed from '../components/Choosed';

//add actions
import {
  getInitialState,
  getSelect,
  getQuestion,
  asynAdd,
  asynRemove,
  toggle,
  asynCollection,
  asynDiscoll,
  asynRemoveAll,
  loginError
} from '../actions/actionCreators';

class Details extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(details, type) {
    const { userChosen, userid, userCollection, dispatch } = this.props;
    let j = 0, k = 0, m = 0, n = 0;
    if (type === 'toggle') {
      dispatch(toggle(details));
    } else if (userid !== -1) {
      if(type === 'add') {
        if(details === 'all') {
          dispatch(asynRemoveAll({userid: userid}));
        } else {
          userChosen.map((chosen, i) => {
            if ( chosen.id === details.id ) {
              k = i;
              j++;
            }
          });
          if (j === 0) {
            dispatch(asynAdd(details));
          } else {
            dispatch(asynRemove({ ...details, k: k}))
          }
        }
      } else if (type === 'collection') {
        userCollection.map((collection, i) => {
          if ( collection == details.id ) {
            n = i;
            m++;
          }
        });
        if (m === 0) {
          dispatch(asynCollection(details));
        } else {
          dispatch(asynDiscoll({ ...details, k: n}))
        }
      }
    } else {
      alert("请先登录");
      history.push('/')
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const pathname= window.location.pathname;
    const path = pathname.replace(/\/question/i, '');
    const query = window.location.search;
    if (query === "") {
      dispatch(getSelect(path));
      dispatch(getQuestion(path));
    } else {
      dispatch(getSelect(path));
      dispatch(getQuestion(path, query));
    }
  }

  componentDidUpdate (prevProps) {
    const { dispatch } = this.props;
    const old = prevProps.location.pathname;
    const oldPath = old.replace(/\/question/i, '');
    const oldQuery = prevProps.location.search;
    const lew = this.props.location.pathname;
    const newPath = lew.replace(/\/question/i, '');
    const newQuery = this.props.location.search;
    if (newPath === oldPath && newQuery !== oldQuery) {
      dispatch(getQuestion(newPath, newQuery))
    } else if (newPath !== oldPath ) {
      dispatch(getSelect(newPath));
      dispatch(getQuestion(newPath));
    }
  }

  render() {
    const { Points, Difficulty, Charaction, Types, context, pageNum, pages, userChosen } = this.props;

    let style = {
      divStyle: {
        float: 'left', marginLeft: '20%', width: '820px'
      },
      toolStyle: {
        color: '#FFFFFF',backgroundColor: '#FF5252',padding: '0 16px', zIndex: 0
      }
    };

    return (
      <div className="main">
        <div className={styles.sideStyle} >
          <List>
            <Subheader style={{width: '100%'}}>全部知识点</Subheader>
            <div>
            { Points.map((point, i) => <Point point={point} key={i} i={i}/>)}
            </div>
          </List>
        </div>
        <div style={style.divStyle}>
          <Toolbar style={{padding: '0'}}>
            <ToolbarGroup>
              <ToolbarTitle text="题型" style={style.toolStyle}/>
              { Types.map((type, i) => <Lest type={type} key={i} />)}
            </ToolbarGroup>
          </Toolbar>
          <Toolbar  style={{padding: '0'}}>
            <ToolbarGroup>
              <ToolbarTitle text="难度"  style={style.toolStyle}/>
              { Difficulty.map((diff, i) => <Lest type={diff} key={i} />)}
            </ToolbarGroup>
          </Toolbar>
          <Toolbar style={{padding: '0'}}>
            <ToolbarGroup>
              <ToolbarTitle text="特点"  style={style.toolStyle}/>
              { Charaction.map((feature, i) => <Lest type={feature} key={i}/>)}
            </ToolbarGroup>
          </Toolbar>
          <div>
            { context.map((contextList, i) =>
              <Question {...this.props} onChange={this.handleChange} contextList={contextList} key={i} i={i}/>)}
          </div>
          <Page {...this.props} pageNum = {pageNum} pages = {pages}/>
        </div>
        <div className={styles.Side} style={{ right: 0,width: '270px'}}>
          <Choosed userChosen = {userChosen} onChange={this.handleChange}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { selects, questions, grades } = state;
  const { userid } = grades;

  const {
    Points,
    Types,
    Difficulty,
    Charaction
  } = selects;

  const {
    context,
    pageNum,
    pages,
    userChosen,
    userCollection
  } = questions;

  return {
    userid,
    Points,
    Types,
    Difficulty,
    Charaction,
    context,
    pageNum,
    pages,
    userChosen,
    userCollection
  }
};


export default connect(mapStateToProps)(Details);