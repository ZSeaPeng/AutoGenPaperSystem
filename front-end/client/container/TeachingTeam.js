import React, { Component } from 'react';
import style from '!style!css!../style/slick.min.css';


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
        <div style={styles.container1}>
          <h2 style={styles.title}>教研团队</h2>
        </div>
      </div>
		);
	}
}
