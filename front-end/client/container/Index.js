import React, { Component } from 'react';
import { connect } from 'react-redux';
//不要删
import style from '!style!css!../style/slick.min.css';
import styles from '!style!css!../style/slick-theme.min.css';
let Slider = require('react-slick');

//UI
import News from '../components/News';
import SignUp from '../components/SignUp';

import imgSrc1 from '../img/banner1.jpg';
import imgSrc2 from '../img/banner2.jpg';
import imgSrc3 from '../img/banner3.jpg';
import imgSrc4 from '../img/banner4.jpg';

//add actions
import { asynLogin } from '../actions/actionCreators'

class Index extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(username, password, type) {
    const { dispatch } = this.props;
    dispatch(asynLogin(username, password, type))
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
      width: '100%',
      height: '626px',
      position: 'absolute',
      top: 100,
      // left: 90
    };
    const { update, userid, error } = this.props;
    const isEmpty = update.length === 0;
    const isNull = userid === -1;
    return (
      <div>
      {/*
        {isNull
          ? <SignUp error={error} onChange={this.handleSubmit}/>
          : <div></div>
        }
        {isEmpty
                   ? <div></div>
                   :*/} 
          <div>
            <div style={style}>
            <Slider  {...settings}>
              <div><img src={imgSrc1} style={{width: '100%', height: '100%'}} /></div>
              <div><img src={imgSrc2} style={{width: '100%', height: '100%'}} /></div>
              <div><img src={imgSrc3} style={{width: '100%', height: '100%'}} /></div>
              <div><img src={imgSrc4} style={{width: '100%', height: '100%'}} /></div>
            </Slider>
            </div>
            <News news={ update }/>
          </div>
        {/*}*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { grades } = state;
  const { update, userid, error } = grades;
  return {
    update,
    userid,
    error
  }
};

export default connect(mapStateToProps)(Index);