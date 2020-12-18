import {
  Link
} from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
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
        </ul>
      </nav>
    </div>
  );
}

export default Nav;

function About() {
return <h2>About</h2>;
}

function Users() {
return <h2>Users</h2>;
}