import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import Lest from '../components/Lest';
import Point from '../components/Point';
import Question from '../components/Question';

import { getSelect, getQuestion } from '../actions/actionCreators';



const Details = React.createClass({
    componentDidMount() {
        const { dispatch } = this.props;
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
        const points = this.props.points || [];
        const diffs = this.props.diffs || [];
        const features = this.props.features || [];
        const types = this.props.types || [];
        const contextLists = this.props.questions.contextLists || [];
        const count = this.props.questions.count;
        const id = this.props.questions.id;

        // var pageNum;
        // const id = questions.id;

        // if (id === 1) {
        //     pageNum = <div>
        //             [1, 2, 3 ,4 ,5]
        //                 .map((id) => <Link to={`${pathname}/${id}`}>{id}</Link>);
        //             <Link to={`${pathname}/${id + 1}`}>下一页</Link>
        //         </div>
        //     ;
        // }else if (id === count) {
        //     pageNum = <div>
        //         <Link to={`${pathname}/${id - 1}`}>上一页</Link>
        //         [id - 4, id - 3, id - 2 ,id - 1, id]
        //             .map((id) => <Link to={`${pathname}/${id}`}>{id}</Link>);
        //     </div>
        //     ;
        // }else {
        //     pageNum = <div>
        //         <Link to={`${pathname}/${id - 1}`}>上一页</Link>
        //         [id, id + 1, id +2, id + 3, id + 4]
        //         .map((id) => <Link to={`${pathname}/${id}`}>{id}</Link>);
        //         <Link to={`${pathname}/${id + 1}`}>下一页</Link>
        //     </div>
        //     ;
        // }
        var divStyle = {
            marginLeft: '20%',
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
                            <ToolbarTitle text="题型" style={{color: '#FFFFFF',backgroundColor: '#FF1744',padding: '0 16px'}}/>
                            { types.map((type, i) => <Lest type={type} key={i} />)}
                        </ToolbarGroup>
                    </Toolbar>
                    <Toolbar  style={{padding: '0'}}>
                        <ToolbarGroup>
                            <ToolbarTitle text="难度"  style={{color: '#FFFFFF',backgroundColor: '#FF1744',padding: '0 16px'}}/>
                            { Difficulty.map((diff, i) => <Lest type={diff} key={i} />)}
                        </ToolbarGroup>
                    </Toolbar>
                    <Toolbar  style={{padding: '0'}}>
                        <ToolbarGroup>
                            <ToolbarTitle text="特点"  style={{color: '#FFFFFF',backgroundColor: '#FF1744',padding: '0 16px'}}/>
                            { Charaction.map((feature, i) => <Lest type={feature} key={i}/>)}
                        </ToolbarGroup>
                    </Toolbar>
                    <div>
                        { contextLists.map((contextList, i) => <Question contextList={contextList} key={i} />)}
                    </div>
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
    contextLists,
    id,
    count
  } = questions[0] || {
    contextLists: [],
    id: 1,
    count: 1
  }

  return {
    Points,
    Types,
    Difficulty,
    Charaction,
    contextLists,
    id,
    count
  }
}


export default connect(mapStateToProps)(Details);