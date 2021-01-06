import React, { Component } from 'react';
import UserInfo from '../UserInfo/';
import Post from '../Post/';
import PostsAPI from '../PostsAPI/';
import './main.css';

class Main extends Component {
  render() {
    return <main>
      <aside>
        <UserInfo/>
        {/* <UserInfo name="@david-mcgurrin" numPosts="50"/> */}
      </aside>
      <section>
        <h2>Micropost Feed</h2>
        <PostsAPI/>
      </section>
    </main>
  }
}

export default Main;
