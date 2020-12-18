import React, { useState, useEffect } from 'react';

function UserInfo() {
  const [user, setUser] = useState([]);
  const count = 1;

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://staging.quotable.io/quotes/KBk2VabfrRne');
      const data = await response.json();
      setUser(data);
    }
    getData();
  }, []);
  
  return  <div>
    <h2>{user.author}</h2>
    <p>{count} post</p>
    <textarea rows="4" cols="30">
      
    </textarea>
  </div>
}

export default UserInfo;
