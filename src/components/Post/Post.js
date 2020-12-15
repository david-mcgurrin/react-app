import React, { Component } from 'react';

class Post extends Component {
  render() {
    const name = this.props.name;
    const content = this.props.content;
    const date = this.props.date;
    return  <div>
      <h3>{name}</h3>
      <p>{content}</p>
      <p>{date}</p>
    </div>
  }
}

export default Post;
