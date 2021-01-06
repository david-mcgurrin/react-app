import React from "react";
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

import './PostList.css';

const POSTS_QUERY = gql`
  query {
    microposts {
      id
      content
      createdAt
      user {
        name
      }
    }
  }
`;

const PostList = () => {
  return (
    <div className="main">
      <Query query={POSTS_QUERY}>
        {({loading, error, data}) => {
          console.log(data);
          if (loading) return <p>Fetching data..</p>
          if (error) return <p>There was an error: {error}</p>
          console.log(data);
          const results = data.microposts.map(post => {
            return <div className="post">
              <p key={post.id} className="content">{post.content}</p>
              <p className="info">by {post.user.name} on {post.createdAt}</p>
            </div>
          })
          return results;
        }}
      </Query>
    </div>

  )
};

export default PostList;
