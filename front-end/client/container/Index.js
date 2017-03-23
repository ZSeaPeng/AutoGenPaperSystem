import React, { Component } from 'react';
import { connect } from 'react-redux';
//不要删
import style from '!style!css!../style/slick.min.css';
import styles from '!style!css!../style/slick-theme.min.css';
let Slider = require('react-slick');
import teacher from '../img/teacher.png';
import school from '../img/school.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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
    const styles = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
    };
    const style = {
      width: '100%',
      height: '626px',
      position: 'absolute',
      top: 150,
      // left: 90
    };
    const { update, userid, error } = this.props;
    const isEmpty = update.length === 0;
    const isNull = userid === -1;
    return (
      <div>
        <div style={style}>
          <Slider  {...settings}>
            <div><img src={imgSrc1} style={{width: '100%', height: '100%'}} /></div>
            <div><img src={imgSrc2} style={{width: '100%', height: '100%'}} /></div>
            <div><img src={imgSrc3} style={{width: '100%', height: '100%'}} /></div>
            <div><img src={imgSrc4} style={{width: '100%', height: '100%'}} /></div>
          </Slider>
        </div>
        <div 
          style={{
            position: 'absolute', top: 700, 
            width: '100%', height: 265, marginBottom: 35,
          }}
        >
          <div style={{display: 'inline-block', width: '45%', margin: '0 20px'}}>
            <h2>最新职高试卷</h2>
              <Tabs selectedIndex={2}>
                <TabList>
                  <Tab>Foo</Tab>
                  <Tab>Bar</Tab>
                  <Tab>Baz</Tab>
                </TabList>
                <TabPanel>
                  <h2>Hello from Foo</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Hello from Bar</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Hello from Baz</h2>
                </TabPanel>
              </Tabs>
          </div>
          <div style={{display: 'inline-block', width: '45%', margin: '0 20px'}}>
            <h2>他山之石</h2>
            <Tabs selectedIndex={2}>
              <TabList>
                <Tab>Foo</Tab>
                <Tab>Bar</Tab>
                <Tab>Baz</Tab>
              </TabList>
              <TabPanel>
                <h2>Hello from Foo</h2>
              </TabPanel>
              <TabPanel>
                <h2>Hello from Bar</h2>
              </TabPanel>
              <TabPanel>
                <h2>Hello from Baz</h2>
              </TabPanel>
            </Tabs>
          </div>
          <div style={{backgroundColor: '#eee'}}>
            <div style={{margin: '20px auto', width: 1000, height: '100%'}}>
              <div style={{display: 'inline-block', width: 500}}>
                <div style={{textAlign: 'center'}}>
                  <img src={teacher} style={{width:121}} />
                </div>
                <p style={{textAlign: 'center'}}>为教师带来</p>
                <p style={{textAlign: 'center'}}>权威题库&nbsp;&nbsp;快捷选题&nbsp;&nbsp;在线组卷&nbsp;&nbsp;测评报告</p>
              </div>
              <div style={{display: 'inline-block', width: 500}}>
                <div style={{textAlign: 'center'}}>
                  <img src={school} style={{width:121}} />
                </div>
                <p style={{textAlign: 'center'}}>为学校带来</p>
                <p style={{textAlign: 'center'}} >优质试题&nbsp;&nbsp;智能组卷&nbsp;&nbsp;在线测评&nbsp;&nbsp;可定制</p>
              </div>
            </div>
           </div>
        </div>
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