import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from '!style!css!../style/slick.min.css';
import styles from '!style!css!../style/slick-theme.min.css';
let Slider = require('react-slick');

//UI
import News from '../components/News';
import SignUp from '../components/SignUp';

//add actions
import { asynLogin } from '../actions/actionCreators'

class Index extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(username, password) {
    const { dispatch } = this.props;
    dispatch(asynLogin(username, password))
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
    };
    const { update, userid } = this.props;
    const isEmpty = update.length === 0;
    const isNull = userid === '';
    return (
      <div>
        {isNull
          ? <div></div>
          : <SignUp onChange={this.handleSubmit}/>
        }
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
            <News news={ update }/>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { grades } = state;
  const { update, userid } = grades;
  return {
    update,
    userid
  }
};

export default connect(mapStateToProps)(Index);