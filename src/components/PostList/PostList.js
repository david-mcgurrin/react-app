import React from "react";
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const POSTS_QUERY = gql`
  query {
    users {
      id
      name
    }
  }
`;

const PostList = () => {
  return (
    <Query query={POSTS_QUERY}>
      {({loading, error, data}) => {
        console.log(data);
        if (loading) return <p>Fetching data..</p>
        if (error) return <p>There was an error: {error}</p>
        console.log(data);
        const results = data.users.map(user => {
          return <p key={user.id}>{user.id}: {user.name}</p>
        })
        return results;
      }}
    </Query>
  )
};

export default PostList;
