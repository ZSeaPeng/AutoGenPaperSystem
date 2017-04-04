import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import { browserHistory } from 'react-router';

class Wait extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		setTimeout(function() {browserHistory.push('/autotestpaper') }, 10000)
	}
	render() {
		return (<LinearProgress mode="indeterminate" style={{top: 50, width: '80%', left: '10%'}}/>)
	}
}

export default Wait;