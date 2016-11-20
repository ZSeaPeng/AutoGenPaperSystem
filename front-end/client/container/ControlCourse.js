import React, { Component } from 'react';
import { connect } from 'react-redux';

//UI
import {Card, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

//component
import CourseCard from './CourseCard'

//add action
import { getCourseList, asynCreateCourse, asynCreateNode } from '../actions/actionCreators';

class ControlCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type1: false,
      type2: false,
      node: '',
      course: '',
      detail: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleShow1 = this.handleShow1.bind(this);
    this.handleShow2 = this.handleShow2.bind(this);
    this.handleAddCourse = this.handleAddCourse.bind(this);
    this.handleSubmitCourse = this.handleSubmitCourse.bind(this);
    this.handleSubmitNode = this.handleSubmitNode.bind(this);
    this.courseChange = this.courseChange.bind(this);
    this.nodeChange = this.nodeChange.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCourseList());
  }

  courseChange(e) {
    this.state.course = e.target.value;
  }

  nodeChange(e) {
    this.state.node = e.target.value;
  }

  handleAddCourse() {
    this.setState({type2: !this.state.type2})
  }

  handleChange(detail) {
    this.setState({type1: !this.state.type1, detail: detail})
  }

  handleShow1() {
    this.setState({type1: !this.state.type1})
  }

  handleShow2() {
    this.setState({type2: !this.state.type2})
  }

  handleSubmitNode() {
    const { dispatch } = this.props;
    if(this.state.node === '') {
      alert('节点名不能为空');
    } else {
      dispatch(asynCreateNode({...this.state.detail, point: this.state.node}));
      this.setState({type1: !this.state.type1})
    }
  }

  handleSubmitCourse() {
    const { courseList, dispatch } = this.props;
    let count = 0;
    for (let i = 0; i < courseList.length; i++) {
      if (this.state.course === courseList[i].subName) {
        count++;
      }
    }
    if (this.state.course === '') {
      alert('科目名不能为空');
    } else if (count) {
      alert('科目已存在');
    } else {
      dispatch(asynCreateCourse(this.state.course));
      this.setState({type2: !this.state.type2})
    }
  }

  render() {
    const { courseList } = this.props;
    let styles = {
      p: {
        color: '#FFFFFF',
        margin: '0px'
      },
      button: {
        position: 'fixed',
        bottom: 85,
        right: 20,

      },
      div: {
        display: '-webkit-flex', /* Safari */
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
      },
      card1:{},
      card2:{},
      div1:{}
    };

    if(this.state.type1) {
      styles.card1 = {
        padding: '1%',
        position: 'fixed',
        margin: 'auto',
        height: '200px',
        maxWidth: '30%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        boxShadow: '0 0 0 999px rgba(0, 0, 0, .7)'
      }
    } else {
      styles.card1 = {
        display: 'none'
      }
    }

    if(this.state.type2) {
      styles.card2 = {
        padding: '1%',
        position: 'fixed',
        margin: 'auto',
        height: '200px',
        maxWidth: '30%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        boxShadow: '5px 5px 100px #888888'
      }
    } else {
      styles.card2 = {
        display: 'none'
      }
    }
    return (
      <div style={styles.div}>
        <Card style={{maxWidth: "30%", margin: 10, display: 'inline-block'}} onClick={this.handleAddCourse}>
          <CardText style={{fontSize: 36, color: '#9E9E9E'}}>
            添加科目
          </CardText>
        </Card>
        {courseList.map((sub, i) =>
          <CourseCard {...this.props} sub={sub} key={i} i={i} onChange={this.handleChange}/>)
        }
        <Card style={styles.card1}>
          <TextField
            floatingLabelText="输入节点名"
            onChange={ this.nodeChange }
          /><br />
          <RaisedButton label="确认添加此节点" fullWidth={true} secondary={true} onClick = {this.handleSubmitNode}/>
          <RaisedButton style={{marginTop: 10}} label="取消操作" fullWidth={true} onClick = {this.handleShow1}/>
        </Card>
        <Card style={styles.card2}>
          <TextField
            floatingLabelText="输入科目名"
            onChange={ this.courseChange }
          /><br />
          <RaisedButton label="确认添加此科目" fullWidth={true} secondary={true} onClick = {this.handleSubmitCourse}/>
          <RaisedButton style={{marginTop: 10}} label="取消操作" fullWidth={true} onClick = {this.handleShow2}/>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ courseList }) => ({ courseList });

export default connect(mapStateToProps)(ControlCourse);