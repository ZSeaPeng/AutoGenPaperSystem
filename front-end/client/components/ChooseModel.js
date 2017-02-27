import React, { Component, PropTypes } from 'react';

import imgSrc1 from '../img/paper1.png';
import imgSrc2 from '../img/paper2.png';

const styles = {
  title: {
    fontFamily: "Microsoft YaHei",
    fontWright: "normal",
    color: "#333"
  },
  // radio: {
  // 	marginLeft: "40%",
  // },
  parents: {
    float: 'left',
  	width: 180,
  	height: 190,
  	marginLeft: '3%',
  },
  children1: {
    width: 180,
		height: 180,
		backgroundColor: '#B0E0E6',
		backgroundImage: 'url('+imgSrc1+')',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
    borderRadius: 5
  },
  children2: {
    width: 180,
		height: 180,
		backgroundColor: '#B0E0E6',
		backgroundImage: 'url('+imgSrc2+')',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
    borderRadius: 5,
  },
  radio: {
    position: 'relative',
		top: 10,
		left: '40%',
  },
  p1: {
    position: 'relative',
    left: 90,
    top: 10,
    fontFamily: "Microsoft YaHei",
    fontWright: "normal",
    color: "#333"
  },
  p2: {
    position: 'relative',
    left: 48,
    top: 100,
    fontFamily: "Microsoft YaHei",
    fontWright: "normal",
    color: "#333"
  }
};

class ChooseModel extends Component{

    constructor(props) {
      super(props);
      this.state = {value: 1};
      this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
      this.setState({value: event.target.value});
      this.props.callback(event.target.value);
    }
    render() {
        return(
          <div>
  		      <h3 style={styles.title}>选择试卷版式</h3>
            <label style={styles.parents}>
          		<div style={styles.children1}>
          	      <p style={styles.p1}>A4/B5竖版</p>
          	      <h2 style={styles.p2}>随堂测验</h2>
          		</div>
          		<input type="radio" name="model" value="1" onChange={this.handleChange} style={styles.radio}/>
          	</label>
            <label style={styles.parents}>
          		<div style={styles.children1}>
          	      <p style={styles.p1}>A4/B5竖版</p>
          	      <h2 style={styles.p2}>单元测试</h2>
          		</div>
          		<input type="radio" name="model" value="2" onChange={this.handleChange} style={styles.radio}/>
          	</label>
            <label style={styles.parents}>
          		<div style={styles.children2}>
          	      <p style={styles.p1}>B4/A3横版</p>
          	      <h2 style={styles.p2}>期中测试</h2>
          		</div>
          		<input type="radio" name="model" value="3" onChange={this.handleChange} style={styles.radio}/>
          	</label>
            <label style={styles.parents}>
          		<div style={styles.children2}>
          	      <p style={styles.p1}>B4/A3横版</p>
          	      <h2 style={styles.p2}>期末考试</h2>
          		</div>
          		<input type="radio" name="model" value="4" onChange={this.handleChange} style={styles.radio}/>
          	</label>
            <label style={styles.parents}>
          		<div style={styles.children2}>
          	      <p style={styles.p1}>B4/A3横版</p>
          	      <h2 style={styles.p2}>高考模拟</h2>
          		</div>
          		<input type="radio" name="model" value="5" onChange={this.handleChange} style={styles.radio}/>
          	</label>
		      </div>
        )
    }
};



export default ChooseModel;
