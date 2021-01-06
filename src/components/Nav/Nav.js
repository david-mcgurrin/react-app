import {
  Link
} from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/list">Post List</Link>
        </li>
        <li>
          <Link to="/new">New Post</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

function About() {
return <h2>About</h2>;
}

function Users() {
return <h2>Users</h2>;
}