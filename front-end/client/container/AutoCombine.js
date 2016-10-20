import React, { Component } from 'react';

import ChooseModel from '../components/ChooseModel';
import ChooseCourse from '../components/ChooseCourse';
import ConfirmButton from '../components/ConfirmButton';
import ChooseQuestion from '../components/ChooseQuestion';
import ChooseDifficulty from '../components/ChooseDifficulty';


const styles = {
  title: {
    fontFamily: "Microsoft YaHei",
    fontWright: "normal",
    color: "#333"
  },
};


class AutoCombine extends Component {

	render() {
		return (
	      <div style={{margin: 'auto', width: '75%'}}>
			<h2 style={styles.title}>智能组卷</h2><br/>
			<hr/>
			<ChooseCourse/>
		    <br/><hr/>
		    <ChooseModel/>
		    <br/><hr/>
		    <ChooseQuestion/>
		    <br/><hr/>
		    <ChooseDifficulty/>
		    <br/>
		    <ConfirmButton/>
		  </div>
		)
	}
};

export default AutoCombine;