import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Account from './components/Account';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
