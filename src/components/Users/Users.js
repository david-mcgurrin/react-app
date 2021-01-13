import React from "react";
import { gql, useQuery } from '@apollo/client';
import md5 from 'md5';

import './Users.css';

const USERS_QUERY = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;



const PostList = () => {
  const { loading, error, data } = useQuery(USERS_QUERY);
  console.log(data);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  

  return (
    <div className="users main">
      {data.users.map(user => {
        return <li key={user.id} >
          <img src={"https://www.gravatar.com/avatar/" + md5(user.email)} alt="profiler"/>
           <p className="content">{user.name}</p>
        </li>
        })
      }
    </div>

  )
};

export default PostList;
