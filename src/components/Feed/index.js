import React, { Component } from "react";

class Feed extends Component {
  render() {
    return (
      <div key={this.props.id}>
        <h2>{this.props.name}</h2>
        <a href="">{this.props.likes > 1 ? this.props.likes + ' curtidas' : this.props.likes + ' curtida'} /
          {this.props.comments > 1 ? this.props.comments + " comentarios" : ""}</a>
        <hr />
      </div>
    )
  }
}

export default Feed