import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//UI
import {List, ListItem} from 'material-ui/List';
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
  add
} from '../actions/actionCreators';

class Details extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id, type) {
    const { dispatch } = this.props
    if (type === 'add') {
      dispatch(add(id))
    } else if (type === 'download') {
      console.log(`download ${id}`)
    } else if (type === 'collection') {
      console.log(`collection ${id}`)
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
    const { Points, Difficulty, Charaction, Types, context, pageNum, pages, add } = this.props;

    var style = {
      sideStyle: {
        float: 'left', width: '20%'
      },
      divStyle: {
        float: 'left', marginLeft: '20%', width: '60%'
      },
      toolStyle: {
        color: '#FFFFFF',backgroundColor: '#FF5252',padding: '0 16px'
      }
    };

    return (
      <div className="main">
        <div className="Side" style={style.sideStyle}>
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
            { context.map((contextList, i) => <Question onChange={this.handleChange} contextList={contextList} key={i} />)}
          </div>
          <Page {...this.props} pageNum = {pageNum} pages = {pages} />
        </div>
        <div className="Side" style={{marginLeft: '80%',width: '20%'}}>
          <Choosed add = {add}/>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  const { selects, questions, add } = state
  const {
    Points,
    Types,
    Difficulty,
    Charaction
  } = selects[0] || {
    Points: [],
    Types: [],
    Difficulty: [],
    Charaction: []
  }

  const {
    context,
    pageNum,
    pages
  } = questions[0] || {
    context: [],
    pageNum: 1,
    pages: 1
  }

  return {
    Points,
    Types,
    Difficulty,
    Charaction,
    context,
    pageNum,
    pages,
    add
  }
}


export default connect(mapStateToProps)(Details);