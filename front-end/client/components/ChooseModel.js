import React, { Component, PropTypes } from 'react';

import imgSrc1 from '../img/1.jpg';
import imgSrc2 from '../img/2.jpg';
import imgSrc3 from '../img/3.jpg';
import imgSrc4 from '../img/4.jpg';
import imgSrc5 from '../img/5.jpg';

const styles = {
  title: {
    fontFamily: "Microsoft YaHei",
    fontWright: "normal",
    color: "#333"
  },
  radio: {
  	marginLeft: "40%",
  },
  modelDiv: {
  	width: "20%",
  	height: "240",
  	float: "left",
  },
};

class ChooseModel extends Component{
    render() {
        return(
            <div>
		      <h3 style={styles.title}>选择试卷版式</h3>
		      <div style={styles.modelDiv}>
		         <img src={imgSrc1}/>
		         <input type="radio" name="model"  value="modle1" style={styles.radio}/>
		      </div>
		      <div style={styles.modelDiv}>
		         <img src={imgSrc2}/>
		         <input type="radio" name="model" value="modle2" style={styles.radio}/>
		      </div>
		      <div style={styles.modelDiv}>
		         <img src={imgSrc3}/>
		         <input type="radio" name="model" value="modle3" style={styles.radio}/>
		      </div>
		      <div style={styles.modelDiv}>
		         <img src={imgSrc4}/>
		         <input type="radio" name="model" value="modle4" style={styles.radio}/>
		      </div>
		      <div style={styles.modelDiv}>
		         <img src={imgSrc5}/>
		         <input type="radio" name="model" value="modle5" style={styles.radio}/>
		      </div>
		    </div>
        )
    }
};



export default ChooseModel;