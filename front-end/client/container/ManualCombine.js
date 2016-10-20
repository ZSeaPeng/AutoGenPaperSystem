import React, { Component } from 'react';

import ChooseModel from '../components/ChooseModel';
import ChooseCourse from '../components/ChooseCourse';
import ConfirmButton from '../components/ConfirmButton';

const styles = {
  title: {
    fontFamily: "Microsoft YaHei",
    fontWright: "normal",
    color: "#333"
  },
};

class ManualCombine extends Component {

	render() {
		return (
          <div style={{margin: 'auto', width: '75%'}}>
			<h2 style={styles.title}>手动组卷</h2><br/>
			<hr/>
			<ChooseCourse/>
		    <br/><hr/>
		    <ChooseModel/>
		    <br/>
		    <ConfirmButton/>
		  </div>
		)
	}
};

export default ManualCombine;