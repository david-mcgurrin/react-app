import React, {useContext} from 'react';
import { gql, useQuery } from '@apollo/client';
import {AppContext} from '../../context/AppContext';

const POSTS_QUERY = gql`
  query {
    userMicroposts(userId: "1") {
      id
    }
  }
`;

function UserPostCount() {
  const newPost = useContext(AppContext);

  const { loading, error, data, refetch } = useQuery(POSTS_QUERY);
  console.log(data);


  if (newPost.posted) {
    refetch();
  }

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <p>{data.userMicroposts.length} posts</p>
    </>
  );
}

export default UserPostCount;
