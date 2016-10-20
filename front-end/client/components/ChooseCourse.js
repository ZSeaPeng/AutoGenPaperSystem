import React, { Component, PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [];
const items2 = ["高中语文", "高中数学", "高中英语", "初中语文", "初中数学", "初中英语"];
for (let i = 0; i < items2.length; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={items2[i]} />);
}

const styles = {
  title: {
    fontFamily: "Microsoft YaHei",
    fontWright: "normal",
    color: "#333"
  },
};

class ChooseCourse extends Component{

    state = {
      value: 0,
    };

    handleChange = (event, index, value) => {
      this.setState({value});
    };

    render() {
        return(
        	<div>
		      <h3 style={styles.title}>选择科目</h3>
                <SelectField
    		          value={this.state.value}
    		          onChange={this.handleChange}
    		          maxHeight={200}
		            >
                  {items}
                </SelectField>
		      </div>
        )
    }
};



export default ChooseCourse;