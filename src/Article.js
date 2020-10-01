import React, { Component } from "react";

class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const id = this.props.match.params.id;
    return <div>No.{id}の記事情報です</div>;
  }
}

export default Article;
