import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import ChooseModel from '../components/ChooseModel';
import ChooseCourse from '../components/ChooseCourse';
import ChooseQuestion from '../components/ChooseQuestion';
import ChooseDifficulty from '../components/ChooseDifficulty';
import ChoosePoint from '../components/ChoosePoint';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { getSelect, getInitialState, submitWordInfo } from '../actions/actionCreators';

const styles = {
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  confirmButton: {
    width: "16%",
    height: 50,
    marginLeft: "42%",
    marginTop: 30,
  },
  title: {
    fontFamily: "Microsoft YaHei",
    fontWright: "normal",
    color: "#333"
  },
  parent: {
    position: 'absolute',
    left: '7%',
    width: '1100px'
  },
  children: {
    position: 'relative',
    marginTop: '10px',
  }
};

class AutoCombine extends Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      pointValue: 0,
      value: 0,
      model: "1",
      diff: "3",
      questions: {},
      questionsName: {},
      points: {},
      courseChanged: false
    };
  };

  handleChange = (event, index, pointValue) => {
      this.setState({pointValue});
  };
  componentDidMount() {
    const { dispatch } = this.props;
    let path = "/tiku/1/yuwen1/point0";
    dispatch(getSelect(path));
  }
  onCourseChanged = (newValue) => {
    const { dispatch } = this.props;
    let path = this.props.sublist[0].contextList[newValue].url;
    dispatch(getSelect(path));
    this.setState({value: newValue,
                   questions: {},
                   questionsName: {},
                   points: {}
                 });
  };
  onModelChanged = (newModel) => {
    this.setState({model: newModel});
  };
  onDiffChanged = (newDiff) => {
    this.setState({diff: newDiff});
  };
  onQuestionChanged = (qId, num, name) => {
    if (num == 0) {
      delete this.state.questions[qId];
      delete this.state.questionsName[qId];
    } else {
      this.state.questions[qId] = num;
      this.state.questionsName[qId] = name;
    }
  };
  onPointChanged = (isChecked, pointId) => {
    if (isChecked) {
      this.state.points[pointId] = pointId;
    } else {
      delete this.state.points[pointId];
    }
  }

  handleSubmit() {
    const { dispatch } = this.props;
    const wordtype = this.state.model;
    const subject = this.props.sublist[0].contextList[this.state.value].subid;
    const diff = this.state.diff;
    const questions = this.state.questions;
    const questionsName = this.state.questionsName;
    const typeId = [];
    const typeNum = [];
    const typeName = [];
    for ( var id in questions ) {
      typeId.push(id);
      typeNum.push(questions[id]);
      typeName.push(questionsName[id]);
    }
    const points = this.state.points;
    const wordInfo = {wordtype : wordtype,
                      subject : subject,
                      diff : diff,
                      typeId : typeId,
                      typeNum : typeNum,
                      typeName : typeName,
                      points : points,
                     }
    dispatch(submitWordInfo(wordInfo));
  };
	render() {
    const { Points, Types, sublist } = this.props;
    const isEmpty = sublist.length === 0;
		return (
	    <div style={styles.parent}>
  			<h2 style={styles.title}>智能组卷</h2><br/>
  			<hr/>
        <div style={styles.children}>
          { isEmpty? console.log("empty") :
            <ChooseCourse courses={ sublist[0].contextList } callback={this.onCourseChanged}/>
          }
        </div>
		    <br/><hr/>
        <div style={{height:300,margin:'auto'}}>
		      <ChooseModel callback={this.onModelChanged}/>
        </div>
		    <br/><hr/>
        <div style={styles.children}>
		      <ChooseQuestion types={Types} callback={this.onQuestionChanged}/>
        </div>
		    <br/><hr/>
        <div style={styles.children}>
		      <ChooseDifficulty callback={this.onDiffChanged}/>
        </div>
        <br/><hr/>
        <div>
          <h3 style={styles.title}>选择知识点</h3>
          <SelectField
            value={this.state.pointValue}
            onChange={this.handleChange}
            maxHeight={200}
          >
          {
            Points.map((point, i) =>
              <MenuItem value={i} key={i} primaryText={point.name} />
            )
          }
          </SelectField>

          {Points.length === 0 ? console.log("empty points") :
            Points.map((point, i) =>
              <ChoosePoint
                key={i}
                pId={i}
                point={point}
                pointValue={this.state.pointValue}
                callback={this.onPointChanged}
                value={this.state.value}
                />
            )
           }
        </div>
		    <br/>
        { isEmpty? <div></div> :
          <div style={styles.children}>
            <button style={styles.confirmButton} onClick={this.handleSubmit}>选择试题</button>
          </div>
        }
        <p style={{padding:20}}></p>
		  </div>
		)
	}
};

const mapStateToProps = state => {
  const { grades, selects } = state;
  const { sublist } = grades;
  const {
    Points,
    Types,
    Difficulty,
    Charaction
  } = selects
  return {
    Points,
    Types,
    Difficulty,
    Charaction,
    sublist
  }

}
export default connect(mapStateToProps)(AutoCombine);
