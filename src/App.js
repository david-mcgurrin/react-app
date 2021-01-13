import React from "react";
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
import Users from './components/Users';
import PostModal from './components/PostModal';

import '@shopify/polaris/dist/styles.css';

import './App.css';

const defaultContext = {
  visible: true
}

export const AppContext = React.createContext(defaultContext);

function App() {
  return (
    <AppProvider i18n={enTranslations} value={defaultContext}>
      <AppContext.Provider value={defaultContext}>
        <Router>
          <div className="App">
            <Header/>
            <Switch>
              <Route path="/users">
                <Users/>
              </Route>
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
      </AppContext.Provider>
    </AppProvider>
  );
}

export default App;
