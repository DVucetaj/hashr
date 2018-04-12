import React from 'react';
import SearchBar from './SearchBar.js';

import './LandingPage.css';

class LandingPage extends React.Component {
  render() {
      return (
      <div>

        <svg className="lpBackground" height="1024" width="1440">
          <polygon className="lpRed" points="0,0 1082,0 812,754 0,754 "/>
          <polygon className="lpBlue" points="572,0 1440,0 1440,754 300,754 "/>
          <polygon className="lpGreen" points="486,238 1440,238 1440,1024 203,1024 "/>
          <polygon className="lpYellow" points="0,238 997,238 717,1024 0,1024 "/>
          <polygon className="lpWhite" points="838,356 566,356 462,636 738,636 "/>
          
        </svg>



      </div>
    );
  }
}

export default LandingPage;