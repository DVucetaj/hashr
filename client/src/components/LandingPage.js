import React from 'react';
import SearchBar from './SearchBar.js';

import './LandingPage.css';

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      vW: window.innerWidth,
      vH: window.innerHeight,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({vW: window.innerWidth});
    this.setState({vH: window.innerHeight});
  }

  render() {
      
      let vW = this.state.vW;
      let vH = this.state.vH;

      {console.log(vW)}
      {console.log(vH)}
    

      return (


      <div>

        <svg className="lpBackground" width="1440" height={vH}>
         
          <polygon className="lpRed"    points={`${vW*(0/1440)},${vH*(0/1024)} ${vW*(1082/1440)},${vH*(0/1024)} ${vW*(812/1440)},${vH*(754/1024)} ${vW*(0/1440)},${vH*(754/1024)} `} />
          <polygon className="lpBlue"   points={`${vW*(572/1440)},${vH*(0/1024)} ${vW*(300/1440)},${vH*(754/1024)} ${vW*(1440/1440)},${vH*(754/1024)} ${vW*(1440/1440)},${vH*(0/1024)}`}/>    
          <polygon className="lpGreen"  points={`${vW*(0/1440)},${vH*(238/1024)} ${vW*(0/1440)},${vH*(1024/1024)} ${vW*(717/1440)},${vH*(1024/1024)} ${vW*(997/1440)},${vH*(238/1024)}`}/>
          <polygon className="lpYellow" points={`${vW*(486/1440)},${vH*(238/1024)} ${vW*(203/1440)},${vH*(1024/1024)}  ${vW*(1440/1440)},${vH*(1024/1024)} ${vW*(1440/1440)},${vH*(238/1024)}`}/>
          <polygon className="lpWhite"  points={`${vW*(566/1440)},${vH*(356/1024)} ${vW*(838/1440)},${vH*(356/1024)}  ${vW*(738/1440)},${vH*(636/1024)} ${vW*(462/1440)},${vH*(636/1024)}`}/>
      

        </svg>



      </div>
    );
  }
}

export default LandingPage;