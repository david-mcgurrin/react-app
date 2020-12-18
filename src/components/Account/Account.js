import React, {useState, useEffect} from "react";

const Account = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://staging.quotable.io/quotes/KBk2VabfrRne');
      const data = await response.json();
      setUser(data);
    }
    getData();
  }, []);

  return <div>
    <h2>Hello, {user.author}!</h2>
  </div>
};

export default Account;