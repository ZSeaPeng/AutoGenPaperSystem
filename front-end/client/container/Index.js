import React, { Component } from 'react';
import { connect } from 'react-redux';
var Slider = require('react-slick');

//UI
import News from '../components/News';
import SignUp from '../components/SignUp';

class Index extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(username, password) {
    console.log(username, password);
  }

  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      autoplaySpeed: 3000,
      autoplay: true
    };
    const style = {
      width: '720px',
      height: '320px',
      position: 'absolute',
      top: 100,
      left: 90
    }
    const { grades } = this.props;
    const isEmpty = grades.length === 0;
    return (
      <div>
        <SignUp onChange={this.handleSubmit}/>
        {isEmpty
          ? <div></div>
          : <div>
            <div style={style}>
            <Slider  {...settings}>
              <div><img src='http://placekitten.com/g/400/200' /></div>
              <div><img src='http://placekitten.com/g/400/200' /></div>
              <div><img src='http://placekitten.com/g/400/200' /></div>
              <div><img src='http://placekitten.com/g/400/200' /></div>
            </Slider>
            </div>
            <News news={grades[0][0].update}/>
          </div>
        }
      </div>
    );
  }
};

const mapStateToProps = state => ({
  grades: state.grades
});

export default connect(mapStateToProps)(Index);