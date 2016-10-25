import React, { Component } from 'react';

//UI
import News from '../components/News';
import SignUp from '../components/SignUp';

class Index extends Component {
  render() {
    return (
      <div>
        <SignUp />
        <News />
      </div>
    );
  }
};

export default Index;