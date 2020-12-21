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
import PostList from './components/PostList';

import './App.css';

function App() {
  return (
    <Router>
      <PostList/>
    </Router>
  );
}

export default App;
