import React, { Component } from 'react';
import './main.css';

class Main extends Component {
  render() {
    return <main>
      <aside>
        <div>
          <h2>Username</h2>
          <p>Date</p>
          <textarea rows="4" cols="50">
            
          </textarea>
        </div>
      </aside>
      <section>
        <h2>Micropost Feed</h2>
        <div>
          <h3>Username</h3>
          <p>Post content</p>
          <p>Date</p>
        </div>
        <div>
          <h3>Username</h3>
          <p>Post content</p>
          <p>Date</p>
        </div>
        <div>
          <h3>Username</h3>
          <p>Post content</p>
          <p>Date</p>
        </div>
        <div>
          <h3>Username</h3>
          <p>Post content</p>
          <p>Date</p>
        </div>
        <div>
          <h3>Username</h3>
          <p>Post content</p>
          <p>Date</p>
        </div>
      </section>
    </main>
  }
}

export default Main;
