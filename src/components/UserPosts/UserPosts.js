import React, {useContext} from "react";
import { gql, useQuery } from '@apollo/client';
import Post from '../Post';
import {AppContext} from '../../context/AppContext';

const POSTS_QUERY = gql`
  query {
    userMicroposts(userId: 1) {
      content,
      createdAt
      user {
        name
        email
      }
    }
  }
`;



const UserPost = () => {
  const newPost = useContext(AppContext);
  const { loading, error, data, refetch } = useQuery(POSTS_QUERY);
  console.log(data);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  if (newPost.posted) {
    refetch();
  }

  return (
    <>
      {data.userMicroposts.map(post => {
        return <li key={post.id}>
          <Post micropost={post}/>
        </li>
        })
      }
    </>

  )
};

export default UserPost;
