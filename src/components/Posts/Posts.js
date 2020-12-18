import React, {useState, useEffect} from "react";
import './Posts.css';

const Posts = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://staging.quotable.io/quotes');
      const data = await response.json();
      const {results} = data;
      setResults(results);
    }
    getData();
  }, []);

  return <div className="micropost_feed">
    <ul>
      {results.map((quote, i) => (
        <li key={quote._id}>
          <div>
            <p className="author">{quote.author}</p>
            <p>{quote.content}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
};

export default Posts;
