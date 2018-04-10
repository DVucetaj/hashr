import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import './App.css';

//modular components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//pages
import LandingPage from './components/LandingPage';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">        

        <Navbar/>
        This be a big ol hashtag
        
        
          <Switch>
            <div className="content">
              <Route exact path="/" component={LandingPage} />
              {/* <Route path="/search/:id" component={Search} /> */}
              <Route path="/search/" component={Search} />
            </div>
          </Switch>


        <Footer/>

      </div>
      </Router>
    );
  }
}

export default App;
