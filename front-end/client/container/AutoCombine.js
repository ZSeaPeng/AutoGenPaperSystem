import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import ChooseModel from '../components/ChooseModel';
import ChooseCourse from '../components/ChooseCourse';
import ChooseQuestion from '../components/ChooseQuestion';
import ChooseDifficulty from '../components/ChooseDifficulty';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';

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
  chip: {
   backgroundColor: '#64B5F6',
   float:'left',
   marginLeft:2,
   marginTop:2,
   fontFamily: "Microsoft YaHei",
   fontWright: "normal",
   fonColor: "#333"
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
    this.handleCheck = this.handleCheck.bind(this);
    this.state = {
      pointValue: 0,
      value: 0,
      model: "1",
      diff: "3",
      questions: {},
      questionsName: {},
      points: [],
      courseChanged: false
    };
  };

  getPoints = (point, pointValue) => {
    if (point.pointList.length === 0) {
      point["type"] = pointValue;
      this.state.points.push(point);
    }
    else {
      point["type"] = pointValue;
      this.state.points.push(point);
      for (var subpoints of point.pointList) {
        this.getPoints(subpoints, pointValue);
      }
    }
  };

  componentWillReceiveProps(nextProps) {
    this.state.points=[];
    var points = nextProps.Points;
    for(var point of points) {
      this.getPoints(point, points.indexOf(point));
    }
  };

  handleCheck(e, isChecked){
    var pIndex = e.target.name;
    this.state.points[pIndex].select = !this.state.points[pIndex].select;
    this.setState({pointValue : this.state.pointValue});

  };

  handleRequestDelete = (i) => {
    this.state.points[i].select = !this.state.points[i].select;
    this.setState({pointValue : this.state.pointValue});
  };

  handleChange = (event, index, pointValue) => {
      this.setState({pointValue});
  };

  componentDidMount() {
    const { dispatch } = this.props;
    let path = "/tiku/1/yuwen1/point0";
    dispatch(getSelect(path));
  };

  onCourseChanged = (newValue) => {
    const { dispatch } = this.props;
    let path = this.props.sublist[0].contextList[newValue].url;
    dispatch(getSelect(path));
    this.setState({value: newValue,
                   questions: {},
                   questionsName: {},
                   points: []
                 });
   console.log(this.state.points);
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
  // onPointChanged = (isChecked, pointId) => {
  //   if (isChecked) {
  //     this.state.points[pointId] = pointId;
  //   } else {
  //     delete this.state.points[pointId];
  //   }
  // }

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
    var pointsList = [];
    for ( var point of points) {
      if (point.select === true) {
        var id = point.id;
        pointsList.push(id);
      }
    }
    console.log("pointList");
    console.log(pointsList);
    const wordInfo = {wordtype : wordtype,
                      subject : subject,
                      diff : diff,
                      typeId : typeId,
                      typeNum : typeNum,
                      typeName : typeName,
                      points : pointsList,
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
        <div style={{height:550}}>
          <h3 style={styles.title}>选择知识点</h3>
          <div style={{backgroundColor:'#B0E0E6',padding:5,height:520,width:300,float:'left',borderRadius: 10}}>
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

            {this.state.points.length === 0 ? console.log("empty points") :
              this.state.points.map((point, i) =>
              <div>
                {this.state.pointValue === point.type ?
                  <div style = {{ display: 'block' }}>
                    <Checkbox
                      key={i}
                      checked={point.select}
                      name={i}
                      label={point.name}
                      style={styles.title}
                      onCheck={this.handleCheck}
                    />
                  </div> :
                  <div style = {{ display: 'none' }}>
                    <Checkbox
                      key={i}
                      checked={point.select}
                      name={i}
                      label={point.name}
                      style={styles.title}
                      onCheck={this.handleCheck}
                    />
                  </div>
                }
              </div>
              )
             }
          </div>
          <div style={{backgroundColor:"#B0E0E6",height:520,width:770,float:'left',marginLeft:10,padding:5,borderRadius: 10}}>
             <p style={styles.title}>已选择知识点</p>
             {
               this.state.points.map((point, i) =>
                 <div style = {point.select ? {display: 'block'} : { display: 'none' }}>
                   <Chip
                     key={i}
                     onRequestDelete={() => this.handleRequestDelete(i)}
                     style={styles.chip}
                   >
                     {point.name}
                   </Chip>
                </div>
             )
             }
          </div>
        </div>
		    <br/>
        <div style={{ position:"relative",top:10}}>
          {/* <button style={styles.confirmButton} onClick={this.handleSubmit}>生成试卷</button> */}
          <RaisedButton label="生成试卷" secondary={true} style={styles.confirmButton} onClick={this.handleSubmit} />
        </div>
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
