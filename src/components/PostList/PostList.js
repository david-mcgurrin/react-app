import React, {useContext} from "react";
import { gql, useQuery } from '@apollo/client';
import Post from '../Post';
import {AppContext} from '../../context/AppContext';

import './PostList.css';

const POSTS_QUERY = gql`
  query {
    microposts {
      id
      content
      createdAt
      user {
        name
        email
      }
    }
}
`;

const PostList = () => {

  const newPost = useContext(AppContext);

  const { loading, error, data, refetch } = useQuery(POSTS_QUERY);
  console.log(data);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  if (newPost.posted) {
    refetch();
    newPost.updateFeed();
  }

  return (
    <div>
      {data.microposts.map(post => {
        return <li key={post.id}>
          <Post micropost={post}/>
        </li>
        })
      }
    </div>

  )
};

export default PostList;
