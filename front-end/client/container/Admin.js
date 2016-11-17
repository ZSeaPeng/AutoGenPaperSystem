import React from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';

import ControlUser from './ControlUser';
import ControlCourse from './ControlCourse';

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tabs>
        <Tab style={{backgroundColor: '#1976D2'}} label="管理用户"><ControlUser/></Tab>
        <Tab style={{backgroundColor: '#1976D2'}} label="管理学科"><ControlCourse/></Tab>
      </Tabs>

    );
  }
}
