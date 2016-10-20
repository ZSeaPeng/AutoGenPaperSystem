import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

//add components
import Lest from '../components/Lest';
import Point from '../components/Point';
import Question from '../components/Question';
import Page from '../components/Page';
import Choosed from '../components/Choosed';

//add actions
import { getSelect, getQuestion } from '../actions/actionCreators';

const Details = React.createClass({
  componentDidMount() {
    const { dispatch } = this.props;
    const pathname= window.location.pathname;
    dispatch(getSelect(pathname));
    dispatch(getQuestion(pathname));
  },

  componentDidUpdate (prevProps) {
    const { dispatch } = this.props;
    const oldPath = prevProps.location.pathname;
    const newPath = this.props.location.pathname;
    if (newPath !== oldPath ) {
        dispatch(getSelect(newPath));
        dispatch(getQuestion(newPath));
    }
  },

  render() {
    const { Points, Difficulty, Charaction, Types, context, pageNum, pages } = this.props;

    var divStyle = {
      float: 'left',
      width: '60%'
    };

    return (
      <div>
        <div style={{float: 'left', width: '20%'}}>
          <List>
            <Subheader style={{width: '100%'}}>全部知识点</Subheader>
            { Points.map((point, i) => <Point point={point} key={i} i={i}/>)}
          </List>
        </div>
        <div style={divStyle}>
          <Toolbar style={{padding: '0'}}>
            <ToolbarGroup>
              <ToolbarTitle text="题型" style={{color: '#FFFFFF',backgroundColor: '#FF5252',padding: '0 16px'}}/>
              { Types.map((type, i) => <Lest type={type} key={i} />)}
            </ToolbarGroup>
          </Toolbar>
          <Toolbar  style={{padding: '0'}}>
            <ToolbarGroup>
              <ToolbarTitle text="难度"  style={{color: '#FFFFFF',backgroundColor: '#FF5252',padding: '0 16px'}}/>
              { Difficulty.map((diff, i) => <Lest type={diff} key={i} />)}
            </ToolbarGroup>
          </Toolbar>
          <Toolbar  style={{padding: '0'}}>
            <ToolbarGroup>
              <ToolbarTitle text="特点"  style={{color: '#FFFFFF',backgroundColor: '#FF5252',padding: '0 16px'}}/>
              { Charaction.map((feature, i) => <Lest type={feature} key={i}/>)}
            </ToolbarGroup>
          </Toolbar>
          <div>
            { context.map((contextList, i) => <Question contextList={contextList} key={i} />)}
          </div>
          <Page {...this.props} pageNum = {pageNum} pages = {pages} />
        </div>
        <div style={{marginLeft: '80%',width: '20%'}}>
          <List>
            <Subheader style={{width: '100%'}}>已选试题</Subheader>
            <Choosed />
          </List>
        </div>
      </div>
    )
  }
});

const mapStateToProps = state => {
  const { selects, questions } = state
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
    pages
  }
}


export default connect(mapStateToProps)(Details);