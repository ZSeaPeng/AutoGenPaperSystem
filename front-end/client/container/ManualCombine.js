import React, { Component } from 'react';

import ConfirmButton from '../components/ConfirmButton';
import ChooseCourse from '../components/ChooseCourse';
import ChooseModel from '../components/ChooseModel';

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