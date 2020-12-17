import React, { Component } from 'react';
import './post.css';

class Post extends Component {
  render() {
    const name = this.props.name;
    const content = this.props.content;
    const date = this.props.date;
    return  <div className="post">
      <h3>{name}</h3>
      <p>{content}</p>
      <p className="post-date">{date}</p>
    </div>
  }
}

export default Post;
