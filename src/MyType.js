import React, { Component } from "react";

class MyType extends Component {
  render() {
    console.log(this.props.value);
    return <p>{this.props.value}</p>;
  }
}

export default MyType;
