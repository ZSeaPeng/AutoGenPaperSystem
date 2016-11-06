/**
  *for user to look up question updates.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

//UI
import {List, ListItem} from 'material-ui/List';
import Menu from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

//add component
import Question from '../components/Question';
import Page from '../components/Page';
import Choosed from '../components/Choosed';

//add actions
import {
  getQuestion,
  asynAdd,
  remove,
  toggle,
  collection,
  discoll,
  removeAll
} from '../actions/actionCreators';

class Update extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(details, type) {
    const { userChosen, userCollection, dispatch } = this.props;
    var j = 0, k = 0, m = 0, n = 0;
    if (type === 'add') {
      if(details === 'all') {
        dispatch(removeAll());
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
          dispatch(remove({ ...details, k: k}))
        }
      }
    } else if (type === 'download') {
      console.log(`download ${details}`);
    } else if (type === 'collection') {
      userCollection.map((collection, i) => {
        if ( collection === details.id ) {
          n = i;
          m++;
        }
      });
      if (m === 0) {
        dispatch(collection(details));
      } else {
        dispatch(discoll({ ...details, k: n}))
      }
    } else if (type === 'toggle') {
      dispatch(toggle(details));
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
    const { Points, Difficulty, Charaction, Types, context, pageNum, pages, userChosen } = this.props;

    var style = {
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
        <div className="Side" style={{ right: 0,width: '270px'}}>
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
}

export default connect(mapStateToProps)(Update);