import React, { Component } from 'react';
import style from '!style!css!../style/slick.min.css';
import imgSrc1 from '../img/teachingTeam.png';

const styles = {
  title: {
    fontFamily: "Microsoft YaHei",
    fontWright: "normal",
    color: "#333"
  },
  container: {
    padding: 'auto',
    margin: 'auto',
  },
  container1: {
    width: 1200,
    height: 600,
    padding: 'auto',
    margin: 'auto',
  }
};

export default class TeachingTeam extends Component {
	render() {
		return (
      <div style={styles.container}>
            <img src={imgSrc1} style={{width: '100%'}}/>
      </div>
		);
	}
}
