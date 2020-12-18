import React, { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";


function UserInfo() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://staging.quotable.io/authors/L76FRuEeGIUJ');
      const data = await response.json();
      setResults(data);
    }
    getData();
  }, []);
  
  return  <div>
    <h2><Link to="/account">{results.name}</Link></h2>
    <p>{results.quoteCount} posts</p>
    <textarea rows="4" cols="30" placeholder="What's on your mind?">
      
    </textarea>
  </div>
}

export default UserInfo;
