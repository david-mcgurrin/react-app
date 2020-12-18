import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Account from './components/Account';

function App() {
  return (
    <div className="App">      
      <Router>
        <div>
          <header>
          <Header/>
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
          </header>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/account">
              <Account />
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

export default App;
