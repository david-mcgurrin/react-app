import React from "react";
import { gql, useQuery } from '@apollo/client';
import Post from '../Post';

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
  const { loading, error, data } = useQuery(POSTS_QUERY);
  console.log(data);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

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
