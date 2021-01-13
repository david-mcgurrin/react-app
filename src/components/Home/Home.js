import React from 'react';
import UserInfo from '../UserInfo';
import NewPost from '../NewPost';
import PostList from '../PostList';
import './Home.css';



const Home = () => {

  return <main>
    <aside className="homepage-user">
      <UserInfo/>
      <NewPost/>
    </aside>
    <section className="homepage-feed">
      <PostList/>
    </section>
  </main>
}

export default Home;
