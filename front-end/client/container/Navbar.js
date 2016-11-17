import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

//UI
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

//import component
import Combine from '../components/Combine';
import Grade from '../components/Grade';

//pic
import zhituku from '../img/zhitiku.png';
import phone from '../img/phone.png'

//import action
import { getInitialState } from '../actions/actionCreators';

class Navbar extends Component{
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getInitialState());
  };
  render() {
    const { sublist } = this.props;
    const isEmpty = sublist.length === 0;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <Toolbar style={{backgroundColor: "#1565C0"}}>
            <ToolbarGroup>
              <Link to="/">
                <img src={zhituku} style={{height: '100%'}} />
              </Link>
              {isEmpty
                ? <div></div>
                : <MenuItem
                style = {{lineHeight: '56px', color: '#FFFFFF'}}
                primaryText = '科目'
                menuItems =
                { sublist.map((grade, i) =>
                    <Grade grade={grade} key={i} i={i}/>)
                }
                />
              }
              {isEmpty
                ? <div></div>
                : <MenuItem
                style = {{lineHeight: '56px', color: '#FFFFFF'}}
                primaryText = '组卷'
                menuItems ={ <Combine/> }
              />
              }
            </ToolbarGroup>
            <ToolbarGroup>
              <img src={phone}/>
              <ToolbarTitle text="0571-87002755" style = {{lineHeight: '56px', color: '#FFFFFF'}}/>
            </ToolbarGroup>
          </Toolbar>
          { this.props.children }
        </div>
      </MuiThemeProvider>
    )
  }
}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  grades: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  const { grades } = state;
  const { sublist } = grades;
  return {
    sublist
  }
};

export default connect(mapStateToProps)(Navbar);