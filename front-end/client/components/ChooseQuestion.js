import React, { Component, PropTypes } from 'react';

const styles = {
  title: {
    fontFamily: "Microsoft YaHei",
    fontWright: "normal",
    color: "#333",
  },
  table: {
    width: "30%",
    fontFamily: "Microsoft YaHei",
    color: "gray",
    borderSpacing: 20,
  },
  types: {
    backgroundColor: "#2196F3",
    fontSize: 23,
    width: 155,
    color: "white",
  }
};

const items1 = [];

const items2 = ["单选题", "现代文阅读", "文言文阅读", "默写", "诗歌鉴赏",
    "语言表达", "名著导读", "作文", "微写作", "基础知识题"];

const items3 = [];
const items4 = [];

for (let i = 0; i < items2.length; i++ ) {
  items1.push(<span>{items2[i]}</span>);
}

for (let i = 0; i < items1.length; i++ ) {
  items3.push(<input type="number" name={i} min="0" max="80" step="1" defaultValue="0"/>);
}

for (let i = 0; i < items2.length; i++ ) {
  items4.push(<tr><th style={styles.types}>{items1[i]}</th><th>{items3[i]}</th><th><span>题</span></th></tr>);
}

class ChooseQuestion extends Component{

    render() {
        return(
          <div>
            <h3 style={styles.title}>选择题型</h3>
            <table style={styles.table}>
              {items4}
            </table>
          </div>
        )
    }
};

export default ChooseQuestion;