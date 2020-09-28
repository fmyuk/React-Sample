import React, { Component } from "react";

class MyHelloContent extends Component {
  render() {
    return <div>こんにちは、{this.props.children}さん</div>;
  }
}

export default MyHelloContent;
