import React, { Component } from 'react';
import UserInfo from '../UserInfo';
import PostsAPI from '../Posts';
import './Home.css';

class Home extends Component {
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

export default Home;
