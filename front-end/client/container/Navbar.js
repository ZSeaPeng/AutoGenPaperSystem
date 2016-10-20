import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import Download from 'material-ui/svg-icons/file/file-download';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

import Grade from '../components/Grade';
import Combine from '../components/Combine';

import { getInitialState } from '../actions/actionCreators';

class Navbar extends Component{
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getInitialState());
  };
  render() {
    const path = "/";
    const show = window.location.pathname !== path;
    const { grades } = this.props;
    const isEmpty = grades.length === 0;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <Toolbar style={{backgroundColor: "#1565C0"}}>
            <ToolbarGroup>
              <ToolbarTitle text="题库" style={{color: '#FFFFFF'}}/>
              {isEmpty
                ? <div></div>
                : <MenuItem
                style = {{lineHeight: '56px', color: '#FFFFFF'}}
                primaryText = '试题库'
                menuItems =
                { grades[0].map((grade, i) =>
                    <Grade grade={grade} key={i} i={i}/>)
                }
                />
              }
              {isEmpty
                ? <div></div>
                : <MenuItem
                style = {{lineHeight: '56px', color: '#FFFFFF'}}
                primaryText = '组    卷'
                menuItems ={ <Combine/> }
              />
              }
            </ToolbarGroup>
          </Toolbar>
          { this.props.children }
        </div>
      </MuiThemeProvider>
    )
  }
};

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  grades: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  grades: state.grades
});

export default connect(mapStateToProps)(Navbar);