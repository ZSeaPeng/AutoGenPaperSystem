import React, { Component, PropTypes } from 'react';
import Slider from 'material-ui/Slider';

const styles = {
  title: {
    fontFamily: "Microsoft YaHei",
    fontWright: "normal",
    color: "#333",
  },
  slider: {
    width: "76%",
    marginLeft: "12%",
  },
  table: {
    width: "90%",
    marginLeft: "5%",
    fontFamily: "Microsoft YaHei",
    color: "gray",
  }
};

const items2 = ["单选题", "现代文阅读", "文言文阅读", "默写", "诗歌鉴赏",
    "语言表达", "名著导读", "作文", "微写作", "基础知识题"];

const ChooseDifficulty = () => (
  <div>
    <h3 style={styles.title}>选择难度</h3>
    <Slider style={styles.slider} step={0.25} value={0.5} />
    <table style={styles.table}>
      <tr>
        <th>1.00-0.86</th>
        <th>0.85-0.71</th>
        <th>0.70-0.56</th>
        <th>0.55-0.41</th>
        <th>0.40-0.26</th>
      </tr>
      <tr>
        <th>容易</th>
        <th>较易</th>
        <th>中等</th>
        <th>较难</th>
        <th>困难</th>
      </tr>
    </table>
  </div>
);

export default ChooseDifficulty;