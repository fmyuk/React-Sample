import React, { Component } from "react";
import MyNew from "./MyNew";

class MyArticle extends Component {
  renderIfNew(isNew) {
    if (isNew) {
      return <MyNew />;
    }
  }

  render() {
    return (
      <React.Fragment>
        <dt>
          <a href={this.props.url}>{this.props.title}</a>
          {this.renderIfNew(this.props.isNew)}
        </dt>
        <dd>{this.props.description}</dd>
      </React.Fragment>
    );
  }
}

export default MyArticle;
