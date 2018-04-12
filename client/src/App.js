import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar.js';
import LandingPage from './components/LandingPage.js';
import Home from './components/home';

//modular components
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        
        <Navbar/>
        
        <div className="appWrapper">
          <Switch>
            <div className="appContent">
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/home" component={Home} />
              {/* <Route path="/search/:id" component={Home} /> */}
            </div>
          </Switch>
        </div>

      </div>
      </Router>
    );
  }
}

export default App;
