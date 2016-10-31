import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//UI
import {List, ListItem} from 'material-ui/List';
import Menu from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

//add components
import Lest from '../components/Lest';
import Point from '../components/Point';
import Question from '../components/Question';
import Page from '../components/Page';
import Choosed from '../components/Choosed';

//add actions
import {
  getSelect,
  getQuestion,
  add,
  remove
} from '../actions/actionCreators';

class Details extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id, type) {
    const { aktion } = this.props;
    const { dispatch } = this.props;
    if (type === 'add') {
      if (aktion.indexOf(id) === -1) {
        dispatch(add(id));
      } else {
        dispatch(remove(id))
      }
    } else if (type === 'download') {
      console.log(`download ${id}`);
    } else if (type === 'collection') {
      console.log(`collection ${id}`);
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
    const { Points, Difficulty, Charaction, Types, context, pageNum, pages, aktion } = this.props;

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
        <div className="Side sideStyle">
          <List>
            <Subheader style={{width: '100%'}}>全部知识点</Subheader>
            { Points.map((point, i) => <Point point={point} key={i} i={i}/>)}
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
          <Toolbar  style={{padding: '0'}}>
            <ToolbarGroup>
              <ToolbarTitle text="特点"  style={style.toolStyle}/>
              { Charaction.map((feature, i) => <Lest type={feature} key={i}/>)}
            </ToolbarGroup>
          </Toolbar>
          <div>
            { context.map((contextList, i) => <Question pageNum={pageNum} onChange={this.handleChange} contextList={contextList} key={i} i={i}/>)}
          </div>
          <Page {...this.props} pageNum = {pageNum} pages = {pages} />
        </div>
        <div className="Side" style={{ right: 0,width: '270px'}}>
          <Choosed add = {aktion.length}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { selects, questions, aktion } = state;
  const {
    Points,
    Types,
    Difficulty,
    Charaction
  } = selects;

  const {
    context,
    pageNum,
    pages
  } = questions;

  return {
    Points,
    Types,
    Difficulty,
    Charaction,
    context,
    pageNum,
    pages,
    aktion
  }
};


export default connect(mapStateToProps)(Details);