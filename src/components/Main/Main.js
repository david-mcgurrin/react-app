import React, { Component } from 'react';
import UserInfo from '../UserInfo/UserInfo';
import Post from '../Post/Post';
import './main.css';

class Main extends Component {
  render() {
    return <main>
      <aside>
        <UserInfo name="@david-mcgurrin" numPosts="50"/>
      </aside>
      <section>
        <h2>Micropost Feed</h2>
        <Post name="Example User" content="Howya!" date="15/12/2020"/>
        <Post name="A B" content="Test!" date="13/12/2020"/>
        <Post name="Eric Forde" content="New post!" date="12/12/2020"/>
        <Post name="Rollerblade Guy" content="Hello World!" date="10/12/2020"/>
        <Post name="Phillip O'Malley" content="Testing!" date="9/12/2020"/>
        <Post name="Smiley" content="Howya!" date="5/12/2020"/>
        <Post name="Aviva Official" content="Howya!" date="1/12/2020"/>
      </section>
    </main>
  }
}

export default Main;
