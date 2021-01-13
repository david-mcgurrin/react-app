import React from 'react';
import { gql, useQuery } from '@apollo/client';

const POSTS_QUERY = gql`
  query {
    userMicroposts(userId: "1") {
      id
    }
  }
`;

function UserPostCount() {
  const { loading, error, data } = useQuery(POSTS_QUERY);
  console.log(data);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <p>{data.userMicroposts.length} posts</p>
    </>
  );
}

export default UserPostCount;
