import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../style/main.css';
import { history } from '../store';

//add component
import Question from '../components/Question';
import Page from '../components/Page';
import Choosed from '../components/Choosed';

//add actions
import {
  getQuestion,
  asynAdd,
  asynRemove,
  toggle,
  asynCollection,
  asynDiscoll,
  asynRemoveAll
} from '../actions/actionCreators';

class Collections extends Component {
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
      dispatch(getQuestion(path));
    } else {
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
      dispatch(getQuestion(newPath));
    }
  }

  render() {
    const { context, pageNum, pages, userChosen } = this.props;

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
        <div style={style.divStyle}>
          <div>
            { context.map((contextList, i) => <Question {...this.props} onChange={this.handleChange} contextList={contextList} key={i} i={i}/>)}
          </div>
          <Page {...this.props} pageNum = {pageNum} pages = {pages} />
        </div>
        <div className={styles.Side} style={{ right: 0,width: '270px'}}>
          <Choosed userChosen = {userChosen} onChange={this.handleChange}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { grades, questions } = state;
  const { userid } = grades;

  const {
    context,
    pageNum,
    pages,
    userChosen,
    userCollection
  } = questions;

  return {
    userid,
    context,
    pageNum,
    pages,
    userChosen,
    userCollection
  }
};

export default connect(mapStateToProps)(Collections)