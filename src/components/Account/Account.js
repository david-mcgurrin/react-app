import React, {useState, useEffect} from "react";

const Account = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://staging.quotable.io/authors/L76FRuEeGIUJ');
      const data = await response.json();
      const {quotes} = data;
      setResults(quotes);
    }
    getData();
  }, []);

  return <section className="main">
    <h2>Hello, {typeof results[0] !== 'undefined' ? results[0].author : ''}!</h2>
    <p>Here are you quotes:</p>
    <div className="micropost_feed">
      <ul>
        {results.map((quote) => (
          <li key={quote._id}>
            <div>
              <p>{quote.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
};

export default Account;