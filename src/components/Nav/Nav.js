import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from '../Main';

function Nav() {
  return (
    <div className="nav">
      <Router>
        <div>
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

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/account">
              <Users />
            </Route>
            <Route path="/">
              <Main/>
            </Route>
          </Switch>
        </div>
      </Router>
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