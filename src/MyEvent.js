import React, { Component } from "react";

class MyEvent extends Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this, "さん");
  }

  show(suffix, e) {
    console.log(`${this.props.greet}, ${e.target.value}${suffix}!!`);
  }

  render() {
    return (
      <form>
        <label htmlFor="txtName">名前：</label>
        <input id="txtName" type="text" onChange={this.show} />
      </form>
    );
  }
}

export default MyEvent;
