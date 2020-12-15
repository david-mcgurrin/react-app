import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    const name = this.props.name;
    const numPosts = this.props.numPosts;
    return  <div>
      <h2>{name}</h2>
      <p>{numPosts} posts</p>
      <textarea rows="4" cols="50">
        
      </textarea>
    </div>
  }
}

export default UserInfo;
