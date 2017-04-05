import React, { Component } from 'react';
import style from '!style!css!../style/slick.min.css';
import imgSrc1 from '../img/paper/2016gksxq.jpg';
import imgSrc2 from '../img/paper/2016gksxa.jpg';

const styles = {
  container: {
    padding: 'auto',
    marginLeft: 50,
    marginRight: 50,
  },
};
export default class TeachingTeam extends Component {
	render() {
		return (
      <div style={styles.container}>
            <img src={imgSrc1} style={{width: '100%'}}/>
            <img src={imgSrc2} style={{width: '100%'}}/>
      </div>
		);
	}
}
