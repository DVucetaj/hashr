import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class LandingPage extends Component{

  constructor() {
    super();
    this.state = {
      MIGHTNEEDASTATE: [],
    };
  }

  componentDidMount(){
 
  }

  render() {
    return(
      <div>
        <p>Dis da the landing page</p>
      </div>
    );
  }

}

export default LandingPage;
