import { NavLink }  from "react-router-dom";
import PostModal from '../PostModal';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="main-active" exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="users-active" to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink activeClassName="account-active" to="/account">Account</NavLink>
        </li>
        <li>
          <PostModal/>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
