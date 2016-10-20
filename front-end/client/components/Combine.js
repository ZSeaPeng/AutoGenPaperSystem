import React, { Component, PropTypes } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import { Link } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';

import Course from './Course'

class Combine extends Component{
    render() {
        const { Combine } = this.props;
        return(
            <Menu>
              <Link style = {{textDecoration: 'none'}} to="/manualcombine">
                <MenuItem
                  style = {{lineHeight: '56px'}}
                  primaryText = "手工组卷"
                />
              </Link>
              <Link style = {{textDecoration: 'none'}} to="/autocombine">
                <MenuItem
                  style = {{lineHeight: '56px'}}
                  primaryText = "智能组卷"
                />
              </Link>
            </Menu>
        )
    }
};

export default Combine;