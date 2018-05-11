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
    const searchBarInput = document.getElementById('search-bar-input');
    searchBarInput.focus();
    
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({vW: window.innerWidth});
    this.setState({vH: window.innerHeight});
  }

  render() {
    //    
    //  0  1  2  3
    //  4  5  6  7
    //  8  9  10 11
    //  12 13 14 15
    

    // let pos1  = ${vW*(572/1440)}, ${vH*(0/1024)};
    // let pos2  = ${vW*(572/1440)}, ${vH*(0/1024)};
    // let pos3  = ${vW*(1440/1440)},${vH*(0/1024)};
    // let pos4  = ${vW*(0/1440)},   ${vH*(238/1024)};
    // let pos5  = ${vW*(486/1440)}, ${vH*(238/1024)};
    // let pos6  = ${vW*(997/1440)}, ${vH*(238/1024)}; 
    // let pos7  = ${vW*(1440/1440)},${vH*(238/1024)};
    // let pos8  = ${vW*(0/1440)},   ${vH*(754/1024)};
    // let pos9  = ${vW*(300/1440)}, ${vH*(754/1024)}; 
    // let pos10 = ${vW*(812/1440)}, ${vH*(754/1024)};
    // let pos11 = ${vW*(1440/1440)},${vH*(754/1024)};
    // let pos12 = ${vW*(0/1440)},   ${vH*(1024/1024)};
    // let pos13 = ${vW*(203/1440)}, ${vH*(1024/1024)};
    // let pos14 = ${vW*(717/1440)}, ${vH*(1024/1024)};
    // let pos15 = ${vW*(1440/1440)},${vH*(1024/1024)};

    let vW = this.state.vW;
    let vH = this.state.vH;
    {console.log(vW)}
    {console.log(vH)}
    
    return (
      <div>
    
        <svg className="lpBackground">
         
          <polygon className="lpRed"     points={` 
                                                  ${vW*(0/1440)},${vH*(0/1024)} 
                                                  ${vW*(0/1440)},${vH*(238/1024)} 
                                                  ${vW*(486/1440)},${vH*(238/1024)} 
                                                  ${vW*(572/1440)},${vH*(0/1024)} 
                                                `} />
          <polygon className="lpPurple"  points={` 
                                                  ${vW*(572/1440)},${vH*(0/1024)}
                                                  ${vW*(486/1440)},${vH*(238/1024)} 
                                                  ${vW*(997/1440)},${vH*(238/1024)} 
                                                  ${vW*(1082/1440)},${vH*(0/1024)}                                          
                                                `} />
          <polygon className="lpBlue"    points={` 
                                                  ${vW*(1082/1440)},${vH*(0/1024)} 
                                                  ${vW*(997/1440)},${vH*(238/1024)} 
                                                  ${vW*(1440/1440)},${vH*(238/1024)} 
                                                  ${vW*(1440/1440)},${vH*(0/1024)}
                                                `}/>    
          <polygon className="lpOrange"  points={` 
                                                  ${vW*(0/1440)},${vH*(238/1024)}
                                                  ${vW*(0/1440)},${vH*(754/1024)} 
                                                  ${vW*(300/1440)},${vH*(754/1024)} 
                                                  ${vW*(486/1440)},${vH*(238/1024)}                                          
                                                `} />
          <polygon className="lpBeige"   points={` 
                                                  ${vW*(486/1440)},${vH*(238/1024)}
                                                  ${vW*(300/1440)},${vH*(754/1024)} 
                                                  ${vW*(812/1440)},${vH*(754/1024)}                                          
                                                  ${vW*(997/1440)},${vH*(238/1024)} 
                                                `} />
          <polygon className="lpAqua"    points={` 
                                                  ${vW*(997/1440)},${vH*(238/1024)} 
                                                  ${vW*(812/1440)},${vH*(754/1024)}                                          
                                                  ${vW*(1440/1440)},${vH*(754/1024)}
                                                  ${vW*(1440/1440)},${vH*(238/1024)} 
                                                `} />
          <polygon className="lpYellow"  points={` 
                                                  ${vW*(0/1440)},${vH*(754/1024)} 
                                                  ${vW*(0/1440)},${vH*(1024/1024)} 
                                                  ${vW*(203/1440)},${vH*(1024/1024)}     
                                                  ${vW*(300/1440)},${vH*(754/1024)}                                      
                                                `}/>
          <polygon className="lpLime"    points={` 
                                                  ${vW*(300/1440)},${vH*(754/1024)}                                      
                                                  ${vW*(203/1440)},${vH*(1024/1024)}     
                                                  ${vW*(717/1440)},${vH*(1024/1024)} 
                                                  ${vW*(812/1440)},${vH*(754/1024)}     
                                                `} />                                                  
          <polygon className="lpGreen"   points={` 
                                                  ${vW*(812/1440)},${vH*(754/1024)} 
                                                  ${vW*(717/1440)},${vH*(1024/1024)} 
                                                  ${vW*(1440/1440)},${vH*(1024/1024)} 
                                                  ${vW*(1440/1440)},${vH*(754/1024)}
                                                `}/>
           
          <polygon className="lpWhite"   points={`${vW*(566/1440)},${vH*(356/1024)} ${vW*(838/1440)},${vH*(356/1024)}  ${vW*(738/1440)},${vH*(636/1024)} ${vW*(462/1440)},${vH*(636/1024)}`}/>
          
        </svg>

        
        <div className="landingPageWrapper">
          <div className="landingPageCenter">
            <h2 className="landingPageLogo">#hashr</h2>
            <h4 className="landingPageHeadline">the hash slinging hashtag searcher</h4>
            <SearchBar/>
          </div>
        </div>

      </div>
    );
  }
}

export default LandingPage;



        // <div className="landingPageWrapper">
        //   <div className="landingPageCenter">
        //     <h2>#hashr</h2>
        //     <h4>the hash slinging hashtag searcher</h4>
        //     <SearchBar/>
        //   </div>
        // </div>