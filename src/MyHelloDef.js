import React, { Component } from "react";
import PropTypes from "prop-types";

class MyHelloDef extends Component {
  render() {
    return <div>こんにちは、{this.props.name}さん！</div>;
  }
}

MyHelloDef.propTypes = {
  name: PropTypes.string,
};

MyHelloDef.defaultProps = {
  name: "名無権兵衛",
};

export default MyHelloDef;
