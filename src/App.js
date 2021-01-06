import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {AppProvider, DisplayText} from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json'

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Account from './components/Account';
import Footer from './components/Footer';
import PostList from './components/PostList';
import NewPost from './components/NewPost';

import '@shopify/polaris/dist/styles.css';

import './App.css';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route path="/list">
              <PostList/>
            </Route>
            <Route path="/new">
              <NewPost/>
            </Route>
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
    </AppProvider>
  );
}

export default App;
