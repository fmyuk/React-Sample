import React, { Component } from "react";
import PropTypes from "prop-types";

class MyHello extends Component {
  render() {
    return <div>Hello {this.props.name}!</div>;
  }
}

MyHello.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.oneOf(["男", "女", "不明"]),
};

export default MyHello;
