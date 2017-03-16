import React, { Component } from 'react';
import { connect } from 'react-redux';

import ChooseCourse from '../components/ChooseCourse';
import ChooseModel from '../components/ChooseModel';
import RaisedButton from 'material-ui/RaisedButton';

import { submitModel } from '../actions/actionCreators';
const styles = {
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
    width:1200,
    margin:'auto',
    padding:'auto'
  },
  children: {
    margin: 'auto'
  }
};

class ManualCombine extends Component {

  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { value: 0, model: 1 };
  }
  onCourseChanged = (newValue) => {
    this.setState({value: newValue});
  };
  onModelChanged = (newModel) => {
    this.setState({model: newModel});
  };
  handleSubmit() {
    const { dispatch } = this.props;
    const wordtype = this.state.model;
    const subject = this.props.sublist[0].contextList[this.state.value].subid;
    dispatch(submitModel(wordtype, subject));
  };

	render() {
    const { sublist } = this.props;
    const isEmpty = sublist.length === 0;
		return (
      <div style={{padding:'auto', margin:'auto'}}>
      <div style={styles.parent}>
  			<h2 style={styles.title}>手动组卷</h2><br/>
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
		    <br/>
        <div>
            {/* <button style={styles.confirmButton} onClick={this.handleSubmit}>选择试题</button> */}
            <RaisedButton label="选择试题" secondary={true} style={styles.confirmButton} onClick={this.handleSubmit} />
        </div>
        <p style={{padding:20}}></p>
		  </div>
      </div>
		)
	}
};

const mapStateToProps = state => {
  const { grades } = state;
  const { sublist } = grades;
  return {
    sublist
  }
}

export default connect(mapStateToProps)(ManualCombine);
