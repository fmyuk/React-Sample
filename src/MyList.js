import React, { Component } from "react";

class MyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruit: ["apple", "melon"],
    };
    this.handleChangeList = this.handleChangeList.bind(this);
    this.show = this.show.bind(this);
  }

  handleChangeList(e) {
    const data = [];
    const opts = e.target.options;
    for (let i = 0; i < opts.length; i++) {
      if (opts[i].selected) {
        data.push(opts[i].value);
      }
    }
    this.setState({
      [e.target.name]: data,
    });
  }

  show() {
    console.log(`好きな果物： ${this.state.fruit}`);
  }

  render() {
    return (
      <form>
        <label htmlFor="fruit">好きな果物：</label>
        <br />
        <select
          id="fruit"
          name="fruit"
          value={this.state.fruit}
          size="5"
          multiple={true}
          onChange={this.handleChangeList}
        >
          <option value="apple">リンゴ</option>
          <option value="orange">オレンジ</option>
          <option value="melon">メロン</option>
          <option value="grape">ぶどう</option>
          <option value="strawberry">イチゴ</option>
        </select>
        <button type="button" onClick={this.show}>
          送信
        </button>
      </form>
    );
  }
}

export default MyList;
