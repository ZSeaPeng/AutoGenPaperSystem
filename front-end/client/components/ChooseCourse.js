import React, { Component, PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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
      this.props.callback(value);
    };

    render() {
        const { courses } = this.props;
        return(
        	<div>

                <SelectField
    		          value={this.state.value}
    		          onChange={this.handleChange}
    		          maxHeight={200}
		            >
                {
                  courses.map((course, i) =>
                    <MenuItem value={i} key={i} primaryText={course.context} />
                  )
                }
                </SelectField>
		      </div>
        )
    }
};



export default ChooseCourse;
