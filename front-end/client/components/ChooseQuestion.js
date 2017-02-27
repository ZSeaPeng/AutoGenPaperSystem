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
    fontSize: 20,
    width: 155,
    color: "white",
    borderRadius: 2,
    padding: 5,
  }
};


class ChooseQuestion extends Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var num = event.target.value;
    var qId = event.target.id;
    var name = event.target.name;
    if (num >= 0 && num <= 80) {
      this.props.callback(qId, num, name);
    }
  }
    render() {
        const { types } = this.props;
        return(
          <div>
            <h3 style={styles.title}>选择题型</h3>
            <table style={styles.table}>
            <tbody>
              {
                types.map(
                  (type, i) => (
                    <tr key={i}>
                      <td style={styles.types}>{type.name}</td>
                      <td><input
                            name={type.name}
                            type="number"
                            id={type.id}
                            min="0" max="80"
                            step="1"
                            defaultValue="0"
                            onChange={this.handleChange}
                            />
                      </td>
                      <td><span>题</span></td>
                    </tr>

                  )
                )
              }
              </tbody>
            </table>
          </div>
        )
    }
};

export default ChooseQuestion;
