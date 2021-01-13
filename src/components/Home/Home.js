import React, { useState } from 'react';
import UserInfo from '../UserInfo';
import NewPost from '../NewPost';
import PostList from '../PostList';
import './Home.css';



const Home = () => {

  const [postContent, setPostContent] = useState("");

  return <main>
    <aside className="homepage-user">
      <UserInfo/>
      <NewPost setPostContent={setPostContent} postContent={postContent}/>
    </aside>
    <section className="homepage-feed">
      <PostList postContent={postContent}/>
    </section>
  </main>
}

export default Home;
