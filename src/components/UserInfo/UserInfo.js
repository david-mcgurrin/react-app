import React, { useState } from 'react';

function UserInfo(props) {
  const [count, setCount] = useState(10);
  const {name} = props;
  
  return  <div>
    <h2>{name}</h2>
    <p>{count} posts</p>
    <textarea rows="4" cols="30">
      
    </textarea>
  </div>
}

export default UserInfo;
