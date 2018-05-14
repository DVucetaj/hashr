import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

// import Navbar from './components/Navbar.js';
import LandingPage from './components/LandingPage.js';
import Home from './components/home';

//modular components
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/search/" component={Home} />
            <Route path="/search/:hashtag" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
