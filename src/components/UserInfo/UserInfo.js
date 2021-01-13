import React, { useState, useEffect, useContext } from 'react';
import { gql, useQuery } from '@apollo/client';
import UserPostsCount from '../UserPostsCount';
import md5 from 'md5';
import {AppContext} from '../../App';

import './UserInfo.css';

const USER_QUERY = gql`
  query {
    user(id: "1") {
      id
      name
      email
    }
  }
`;

function UserInfo() {

  const visible = useContext(AppContext);

  console.log('context');
  console.log(visible);

  const { loading, error, data } = useQuery(USER_QUERY);
  console.log(data);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    
    <div className="home-user">   
      <img src={"https://www.gravatar.com/avatar/" + md5(data.user.email)} alt="profiler"/>
      <div className="home-user-info">
        <h2>{data.user.name}</h2>
        <p><UserPostsCount/></p>
      </div>
    </div>
  );
}

export default UserInfo;
